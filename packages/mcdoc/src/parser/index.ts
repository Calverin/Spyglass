import type { AstNode, ColorTokenType, CommentNode, FloatNode, InfallibleParser, IntegerNode, Mutable, Parser, ParserContext, ResourceLocationNode, ResourceLocationOptions, SequenceUtil, Source, StringNode } from '@spyglassmc/core'
import * as core from '@spyglassmc/core'
import { any, Arrayable, failOnEmpty, failOnError, Failure, map, optional, Range, repeat, ResourceLocation, select, sequence, setType, stopBefore, SymbolAccessType, validate } from '@spyglassmc/core'
import { arrayToMessage, localeQuote, localize } from '@spyglassmc/locales'
import type { AccessorKeyNode, AnyTypeNode, AttributeNode, AttributeTreeNamedValuesNode, AttributeTreeNode, AttributeTreePosValuesNode, AttributeValueNode, BooleanTypeNode, DispatcherTypeNode, DispatchStatementNode, DocCommentsNode, DynamicIndexNode, EnumBlockNode, EnumFieldNode, EnumInjectionNode, EnumNode, EnumValueNode, FloatRangeNode, IdentifierNode, IndexBodyNode, InjectionNode, IntRangeNode, ListTypeNode, LiteralNode, LiteralTypeNode, ModuleNode, NumericTypeNode, PathNode, PathTypeNode, PrimitiveArrayTypeNode, StringTypeNode, StructBlockNode, StructInjectionNode, StructKeyNode, StructMapKeyNode, StructNode, StructPairFieldNode, StructSpreadFieldNode, TopLevelNode, TupleTypeNode, TypeAliasNode, TypedNumberNode, TypeNode, TypeParamBlockNode, TypeParamNode, UnionTypeNode, UseStatementNode } from '../node'

/**
 * @returns A comment parser that accepts normal comments (`//`) and reports an error if it's a doc comment (`///`).
 * 
 * `Failure` when there isn't a comment.
 */
export const comment: Parser<CommentNode> = validate(
	core.comment({
		singleLinePrefixes: new Set(['//']),
	}),
	(res, src) => !src.slice(res).startsWith('///'),
	localize('mcdoc.parser.syntax.doc-comment-unexpected')
)

/**
 * @returns A parser that parses the gap between **SYNTAX** rules, which may contains whitespace and regular comments.
 */
function syntaxGap(
	/* istanbul ignore next */
	delegatesDocComments = false
): InfallibleParser<CommentNode[]> {
	return (src: Source, ctx: ParserContext): CommentNode[] => {
		const ans: CommentNode[] = []

		src.skipWhitespace()

		while (src.canRead() && src.peek(2) === '//' && (!delegatesDocComments || src.peek(3) !== '///')) {
			const result = comment(src, ctx) as CommentNode
			ans.push(result)
			src.skipWhitespace()
		}

		return ans
	}
}

type SyntaxUtil<CN extends AstNode> = SequenceUtil<CN | CommentNode>
type SP<CN extends AstNode> = InfallibleParser<CN | SyntaxUtil<CN> | undefined> | Parser<CN | SyntaxUtil<CN> | undefined> | { get: (result: SyntaxUtil<CN>) => InfallibleParser<CN | SyntaxUtil<CN> | undefined> | Parser<CN | SyntaxUtil<CN> | undefined> }
type SIP<CN extends AstNode> = InfallibleParser<CN | SyntaxUtil<CN> | undefined> | { get: (result: SyntaxUtil<CN>) => InfallibleParser<CN | SyntaxUtil<CN> | undefined> }
/**
 * @template CN Child node.
 * 
 * @returns A parser that follows a **SYNTAX** rule built with the passed-in parsers.
 * 
 * `Failure` when any of the `parsers` returns a `Failure`.
 */
function syntax<PA extends SP<AstNode>[]>(parsers: PA, delegatesDocComments?: boolean): PA extends SIP<AstNode>[]
	? InfallibleParser<SyntaxUtil<{ [K in number]: PA[K] extends SIP<infer V> ? V : never }[number]>>
	: Parser<SyntaxUtil<{ [K in number]: PA[K] extends SP<infer V> ? V : never }[number]>>
function syntax(parsers: SP<AstNode>[], delegatesDocComments = false): Parser<SyntaxUtil<AstNode>> {
	return (src, ctx) => {
		src.skipWhitespace()
		const ans = sequence(parsers, syntaxGap(delegatesDocComments))(src, ctx)
		src.skipWhitespace()
		return ans
	}
}

/**
 * @template CN Child node.
 * 
 * @param parser Must be fallible.
 * 
 * @returns A parser that follows a **SYNTAX** rule built with the passed-in parser being repeated zero or more times.
 */
function syntaxRepeat<P extends Parser<AstNode | SyntaxUtil<AstNode>>>(parser: P, delegatesDocComments?: boolean): P extends InfallibleParser
	? { _inputParserIsInfallible: never } & void
	: P extends Parser<infer V | SyntaxUtil<infer V>> ? InfallibleParser<SyntaxUtil<V>> : never
function syntaxRepeat<CN extends AstNode>(parser: Parser<CN | SyntaxUtil<CN>>, delegatesDocComments = false): InfallibleParser<SyntaxUtil<CN>> | void {
	return repeat<CN | CommentNode>(parser, syntaxGap(delegatesDocComments))
}

export function literal(literal: Arrayable<string>, options?: { allowedChars?: Set<string>, specialChars?: Set<string>, colorTokenType?: ColorTokenType }): InfallibleParser<LiteralNode> {
	return (src, ctx) => {
		const ans: LiteralNode = {
			type: 'mcdoc:literal',
			range: Range.create(src),
			value: '',
			colorTokenType: options?.colorTokenType,
		}
		ans.value = src.readIf(c => options?.allowedChars?.has(c) ?? (options?.specialChars?.has(c) || /[a-z]/i.test(c)))
		ans.range.end = src.cursor
		if (Arrayable.toArray(literal).every(l => l !== ans.value)) {
			ctx.err.report(localize('expected-got', arrayToMessage(literal), localeQuote(ans.value)), ans)
		}
		return ans
	}
}

function keyword(keyword: Arrayable<string>, options: { allowedChars?: Set<string>, specialChars?: Set<string>, colorTokenType?: ColorTokenType } = { colorTokenType: 'keyword' }): Parser<LiteralNode> {
	return (src, ctx) => {
		const result = literal(keyword, options)(src, ctx)
		if (!Arrayable.toArray(keyword).includes(result.value)) {
			return Failure
		}
		return result
	}
}

function punctuation(punctuation: string): InfallibleParser<undefined> {
	return (src, ctx) => {
		src.skipWhitespace()
		if (!src.trySkip(punctuation)) {
			ctx.err.report(localize('expected-got', localeQuote(punctuation), localeQuote(src.peek())), src)
		}
		return undefined
	}
}

function marker(punctuation: string): Parser<undefined> {
	return (src, _ctx) => {
		src.skipWhitespace()
		if (!src.trySkip(punctuation)) {
			return Failure
		}
		return undefined
	}
}

export function resLoc(options: ResourceLocationOptions): InfallibleParser<ResourceLocationNode> {
	return validate(
		core.resourceLocation(options),
		res => res.namespace !== undefined,
		localize('mcdoc.parser.resource-location.colon-expected', localeQuote(ResourceLocation.NamespacePathSep))
	)
}

const UnicodeControlCharacters = Object.freeze([
	'\x00', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06',
	'\x07', '\x08', '\x09', '\x0A', '\x0B', '\x0C', '\x0D',
	'\x0E', '\x0F', '\x7F',
])

export const string: InfallibleParser<StringNode> = stopBefore(core.string({
	escapable: { characters: ['b', 'f', 'n', 'r', 't', '\\', '"'], unicode: true },
	quotes: ['"'],
}), ...UnicodeControlCharacters)

export const identifier: InfallibleParser<IdentifierNode> = (src, ctx) => {
	// https://spyglassmc.com/user/mcdoc/#identifier
	const IdentifierStart = /^[\p{L}\p{Nl}]$/u
	const IdentifierContinue = /^[\p{L}\p{Nl}\u200C\u200D\p{Mn}\p{Mc}\p{Nd}\p{Pc}]$/u
	const ReservedWords = new Set(['any', 'boolean', 'byte', 'double', 'enum', 'false', 'float', 'int', 'long', 'short', 'string', 'struct', 'super', 'true'])
	const ans: Mutable<IdentifierNode> = {
		type: 'mcdoc:identifier',
		range: Range.create(src),
		options: { category: 'mcdoc' },
		value: '',
	}
	const start = src.innerCursor

	if (IdentifierStart.test(src.peek())) {
		src.skip()
		while (IdentifierContinue.test(src.peek())) {
			src.skip()
		}
	} else {
		ctx.err.report(localize('expected', localize('mcdoc.node.identifier')), src)
	}

	ans.value = src.string.slice(start, src.innerCursor)
	ans.range.end = src.cursor

	if (ReservedWords.has(ans.value)) {
		ctx.err.report(localize('mcdoc.parser.identifier.reserved-word', localeQuote(ans.value)), ans)
	}

	return ans
}

function indexBody(options?: { accessType?: SymbolAccessType, noDynamic?: boolean }): InfallibleParser<IndexBodyNode> {
	const accessorKey: InfallibleParser<AccessorKeyNode> = select([
		{
			prefix: '%',
			parser: literal(['%key', '%parent'], { specialChars: new Set(['%']) }),
		},
		{
			prefix: '"',
			parser: string,
		},
		{
			parser: identifier,
		},
	])

	const dynamicIndex: InfallibleParser<DynamicIndexNode> = setType(
		'mcdoc:dynamic_index',
		syntax([
			punctuation('['),
			accessorKey,
			repeat(sequence([marker('.'), accessorKey])),
			punctuation(']'),
		])
	)

	const index: InfallibleParser<LiteralNode | IdentifierNode | StringNode | ResourceLocationNode | DynamicIndexNode> = select([
		{
			prefix: '%',
			parser: literal(['%fallback', '%none', '%unknown'], { specialChars: new Set(['%']) }),
		},
		{
			prefix: '"',
			parser: string,
		},
		{
			prefix: '[',
			parser: dynamicIndex,
		},
		{
			parser: any([resLoc({ category: 'mcdoc/dispatcher', accessType: options?.accessType }), identifier]),
		},
	])

	return setType(
		'mcdoc:index_body',
		syntax([
			punctuation('['),
			index,
			syntaxRepeat(syntax([marker(','), failOnEmpty(index)])),
			optional(marker(',')),
			punctuation(']'),
		])
	)
}

const pathSegment: InfallibleParser<IdentifierNode | LiteralNode> = select([
	{ prefix: 'super', parser: literal('super') },
	{ parser: identifier },
])

export const path: InfallibleParser<PathNode> = (src, ctx) => {
	let isAbsolute: boolean | undefined
	if (src.trySkip('::')) {
		isAbsolute = true
	}
	return map(
		sequence([
			pathSegment,
			repeat(sequence([marker('::'), pathSegment])),
		]),
		res => {
			const ans: PathNode = {
				type: 'mcdoc:path',
				children: res.children,
				range: res.range,
				isAbsolute,
			}
			return ans
		}
	)(src, ctx)
}

const attributeTreePosValues: InfallibleParser<AttributeTreePosValuesNode> = setType(
	'mcdoc:attribute/tree/pos',
	syntax([
		{ get: () => attributeValue },
		syntaxRepeat(syntax([marker(','), { get: () => failOnEmpty(attributeValue) }], true), true),
	], true)
)

const attributeNamedValue: InfallibleParser<SyntaxUtil<StringNode | IdentifierNode | AttributeValueNode>> = syntax([
	select([
		{ prefix: '"', parser: string },
		{ parser: identifier },
	]),
	select([
		{ prefix: '=', parser: syntax([punctuation('='), { get: () => attributeValue }], true) },
		{ parser: { get: () => attributeTree } },
	]),
], true)

const attributeTreeNamedValues: InfallibleParser<AttributeTreeNamedValuesNode> = setType(
	'mcdoc:attribute/tree/named',
	syntax([
		attributeNamedValue,
		syntaxRepeat(syntax([marker(','), failOnEmpty(attributeNamedValue)], true), true),
	], true)
)

const treeBody: InfallibleParser<SyntaxUtil<AttributeTreePosValuesNode | AttributeTreeNamedValuesNode>> = any([
	syntax([attributeTreePosValues, optional(marker(','))]),
	syntax([attributeTreeNamedValues, optional(marker(','))]),
	syntax([attributeTreePosValues, punctuation(','), attributeTreeNamedValues, optional(marker(','))]),
])

const AttributeTreeClosure = Object.freeze({
	'(': ')',
	'[': ']',
	'{': '}',
})
const attributeTree: InfallibleParser<AttributeTreeNode> = (src, ctx) => {
	const delim = src.trySkip('(') ? '(' : (src.trySkip('[') ? '[' : '{')
	const res = treeBody(src, ctx)
	const ans: AttributeTreeNode = {
		type: 'mcdoc:attribute/tree',
		range: res.range,
		children: res.children,
		delim,
	}
	src.trySkip(AttributeTreeClosure[delim])
	return ans
}

const attributeValue: InfallibleParser<AttributeValueNode> = select([
	{ predicate: src => ['(', '[', '{'].includes(src.peek()), parser: attributeTree },
	{ parser: { get: () => type } },
])

export const attribute: Parser<AttributeNode> = setType(
	'mcdoc:attribute',
	syntax([
		marker('#['),
		identifier,
		select([
			{ prefix: '=', parser: syntax([punctuation('='), attributeValue, punctuation(']')], true) },
			{ predicate: src => ['(', '[', '{'].includes(src.peek()), parser: syntax([attributeTree, punctuation(']')], true) },
			{ parser: punctuation(']') },
		]),
	], true)
)

const attributes = repeat(attribute)

export const dispatchStatement: Parser<DispatchStatementNode> = setType(
	'mcdoc:dispatch_statement',
	syntax([
		attributes,
		keyword('dispatch'),
		resLoc({ category: 'mcdoc/dispatcher', accessType: SymbolAccessType.Write }),
		indexBody({ noDynamic: true }),
		literal('to'),
		{ get: () => type },
	], true)
)

export const docComment: Parser<CommentNode> = core.comment({
	singleLinePrefixes: new Set(['///']),
	includesEol: true,
})

export const docComments: InfallibleParser<DocCommentsNode> = setType('mcdoc:doc_comments', repeat(docComment, src => {
	src.skipWhitespace()
	return []
}))

const prelim: InfallibleParser<SyntaxUtil<DocCommentsNode | AttributeNode>> = syntax([
	optional(failOnEmpty(docComments)),
	attributes,
])

const enumType: InfallibleParser<LiteralNode> = literal([
	'byte',
	'short',
	'int',
	'long',
	'string',
	'float',
	'double',
])

export const float: InfallibleParser<FloatNode> = core.float({
	pattern: /^[-+]?(?:[0-9]+(?:[eE][-+]?[0-9]+)?|[0-9]*\.[0-9]+(?:[eE][-+]?[0-9]+)?)$/,
})

export const typedNumber: InfallibleParser<TypedNumberNode> = setType(
	'mcdoc:typed_number',
	sequence([
		float,
		optional(keyword(['b', 'B', 'd', 'D', 'f', 'F', 'l', 'L', 's', 'S'], { colorTokenType: 'keyword' })),
	])
)

const enumValue: InfallibleParser<EnumValueNode> = select([
	{ prefix: '"', parser: string },
	{ parser: typedNumber },
])

const enumField: InfallibleParser<EnumFieldNode> = setType(
	'mcdoc:enum/field',
	syntax([
		prelim,
		identifier,
		punctuation('='),
		enumValue,
	], true)
)

const enumBlock: InfallibleParser<EnumBlockNode> = setType(
	'mcdoc:enum/block',
	syntax([
		punctuation('{'),
		select([
			{ prefix: '}', parser: punctuation('}') },
			{
				parser: syntax([
					enumField,
					syntaxRepeat(syntax([marker(','), failOnEmpty(enumField)])),
					optional(marker(',')),
					punctuation('}'),
				], true),
			},
		]),
	], true)
)

export const enum_: Parser<EnumNode> = setType(
	'mcdoc:enum',
	syntax([
		prelim,
		keyword('enum'),
		punctuation('('),
		enumType,
		punctuation(')'),
		optional(failOnError(identifier)),
		enumBlock,
	], true)
)

const typeParam: InfallibleParser<TypeParamNode> = setType(
	'mcdoc:type_param',
	syntax([
		identifier,
		optional(syntax([failOnError(literal('extends')), path])),
	])
)

const typeParamBlock: InfallibleParser<TypeParamBlockNode> = setType(
	'mcdoc:type_param_block',
	syntax([
		punctuation('<'),
		select([
			{ prefix: '>', parser: punctuation('>') },
			{
				parser: syntax([
					typeParam,
					syntaxRepeat(syntax([marker(','), failOnEmpty(typeParam)])),
					optional(marker(',')),
					punctuation('>'),
				]),
			},
		]),
	])
)

const noop: InfallibleParser<undefined> = () => undefined

const optionalTypeParamBlock: InfallibleParser<TypeParamBlockNode | undefined> = select([
	{ prefix: '<', parser: typeParamBlock },
	{ parser: noop },
])

const structMapKey: InfallibleParser<StructMapKeyNode> = setType(
	'mcdoc:struct/map_key',
	syntax([
		punctuation('['),
		{ get: () => type },
		punctuation(']'),
	], true)
)

const structKey: InfallibleParser<StructKeyNode> = select([
	{ prefix: '"', parser: string },
	{ prefix: '[', parser: structMapKey },
	{ parser: identifier },
])

const structPairField: InfallibleParser<StructPairFieldNode> = (src, ctx) => {
	let isOptional: boolean | undefined
	const result0 = syntax([
		prelim,
		structKey,
	], true)(src, ctx)
	if (src.trySkip('?')) {
		isOptional = true
	}
	const result1 = syntax([
		punctuation(':'),
		{ get: () => type },
	], true)(src, ctx)
	const ans: StructPairFieldNode = {
		type: 'mcdoc:struct/field/pair',
		children: [...result0.children, ...result1.children],
		range: Range.span(result0, result1),
		isOptional,
	}
	return ans
}

const structSpreadField: InfallibleParser<StructSpreadFieldNode> = setType(
	'mcdoc:struct/field/spread',
	syntax([
		punctuation('...'),
		{ get: () => type },
	], true)
)

const structField: InfallibleParser<StructPairFieldNode | StructSpreadFieldNode> = select([
	{ prefix: '...', parser: structSpreadField },
	{ parser: structPairField },
])

const structBlock: InfallibleParser<StructBlockNode> = setType(
	'mcdoc:struct/block',
	syntax([
		punctuation('{'),
		select([
			{ prefix: '}', parser: punctuation('}') },
			{
				parser: syntax([
					structField,
					syntaxRepeat(syntax([marker(','), failOnEmpty(structField)], true), true),
					optional(marker(',')),
					punctuation('}'),
				], true),
			},
		]),
	], true)
)

export const struct: Parser<StructNode> = setType(
	'mcdoc:struct',
	syntax([
		prelim,
		keyword('struct'),
		optional(failOnEmpty(identifier)),
		optionalTypeParamBlock,
		structBlock,
	], true)
)

const enumInjection: InfallibleParser<EnumInjectionNode> = setType(
	'mcdoc:injection/enum',
	syntax([
		literal('enum'),
		punctuation('('),
		enumType,
		punctuation(')'),
		path,
		enumBlock,
	])
)

const structInjection: InfallibleParser<StructInjectionNode> = setType(
	'mcdoc:injection/struct',
	syntax([
		literal('struct'),
		path,
		optionalTypeParamBlock,
		structBlock,
	])
)

export const injection: Parser<InjectionNode> = setType(
	'mcdoc:injection',
	syntax([
		keyword('inject'),
		select([
			{ prefix: 'enum', parser: enumInjection },
			{ parser: structInjection },
		]),
	])
)

export const typeAlias: Parser<TypeAliasNode> = setType(
	'mcdoc:type_alias',
	syntax([
		prelim,
		keyword('type'),
		identifier,
		optionalTypeParamBlock,
		punctuation('='),
		{ get: () => type },
	], true)
)

export const useStatement: Parser<UseStatementNode> = setType(
	'mcdoc:use_statement',
	syntax([
		keyword('use'),
		path,
		select([
			{ prefix: 'as', parser: syntax([literal('as'), identifier]) },
			{ parser: noop },
		]),
	])
)

const topLevel: Parser<TopLevelNode> = any([
	comment,
	dispatchStatement,
	enum_,
	injection,
	struct,
	typeAlias,
	useStatement,
])

export const module_: Parser<ModuleNode> = setType('mcdoc:module', syntaxRepeat(topLevel, true))

/* eslint-disable @typescript-eslint/indent */
type GetTypeNode<T extends string, P extends Parser<AstNode | SyntaxUtil<AstNode>>> = { type: T } & SyntaxUtil<
	| AttributeNode
	| IndexBodyNode
	| (P extends InfallibleParser<infer V> ? (V extends SyntaxUtil<infer U> ? U : (V extends AstNode ? V : never)) : never)
>
function typeBase<T extends string, P extends Parser<AstNode | SyntaxUtil<AstNode>>>(type: T, parser: P): P extends InfallibleParser<AstNode | SyntaxUtil<AstNode>>
	? InfallibleParser<GetTypeNode<T, P>>
	: Parser<GetTypeNode<T, P>>
/* eslint-enable @typescript-eslint/indent */
function typeBase<T extends string>(type: T, parser: Parser): Parser<{ type: T } & SyntaxUtil<AstNode>> {
	return setType(type, syntax([
		attributes,
		parser,
		syntaxRepeat(failOnError(indexBody())),
	], true))
}

export const anyType: Parser<AnyTypeNode> = typeBase('mcdoc:type/any', keyword('any', { colorTokenType: 'type' }))

export const booleanType: Parser<BooleanTypeNode> = typeBase('mcdoc:type/boolean', keyword('boolean', { colorTokenType: 'type' }))

export const integer: InfallibleParser<IntegerNode> = core.integer({
	pattern: /^(?:0|[-+]?[1-9][0-9]*)$/,
})

function range<P extends InfallibleParser<IntegerNode> | InfallibleParser<FloatNode>>(
	type: P extends InfallibleParser<infer V> ? (V extends IntegerNode ? IntRangeNode : FloatRangeNode)['type'] : never,
	number: P
): InfallibleParser<P extends InfallibleParser<infer V> ? (V extends IntegerNode ? IntRangeNode : FloatRangeNode) : never>
function range(type: string, number: InfallibleParser): InfallibleParser {
	return setType(
		type,
		select([
			{
				prefix: '..',
				parser: sequence([
					literal('..', { allowedChars: new Set('.') }),
					number,
				]),
			},
			{
				parser: sequence([
					stopBefore(number, '..'),
					select([
						{
							prefix: '..',
							parser: sequence([
								literal('..', { allowedChars: new Set('.') }),
								optional(failOnEmpty(number)),
							]),
						},
						{ parser: noop },
					]),
				]),
			},
		])
	)
}

const intRange: InfallibleParser<IntRangeNode> = range('mcdoc:int_range', integer)

const atIntRange: InfallibleParser<IntRangeNode | undefined> = optional((src, ctx) => {
	if (!src.trySkip('@')) {
		return Failure
	}
	src.skipWhitespace()
	return intRange(src, ctx)
})

export const stringType: Parser<StringTypeNode> = typeBase('mcdoc:type/string', syntax([
	keyword('string', { colorTokenType: 'type' }),
	atIntRange,
]))

export const literalType: Parser<LiteralTypeNode> = typeBase('mcdoc:type/literal', select([
	{ predicate: src => src.tryPeek('false') || src.tryPeek('true'), parser: keyword(['false', 'true'], { colorTokenType: 'type' }) },
	{ prefix: '"', parser: failOnEmpty(string) },
	{ parser: failOnError(typedNumber) },
]))

const floatRange: InfallibleParser<FloatRangeNode> = range('mcdoc:float_range', float)

const atFloatRange: InfallibleParser<FloatRangeNode | undefined> = optional((src, ctx) => {
	if (!src.trySkip('@')) {
		return Failure
	}
	src.skipWhitespace()
	return floatRange(src, ctx)
})

export const numericType: Parser<NumericTypeNode> = typeBase('mcdoc:type/numeric_type', select([
	{
		predicate: src => src.tryPeek('float') || src.tryPeek('double'),
		parser: syntax([
			keyword(['float', 'double'], { colorTokenType: 'type' }),
			atFloatRange,
		]),
	},
	{
		parser: syntax([
			keyword(['byte', 'short', 'int', 'long'], { colorTokenType: 'type' }),
			atIntRange,
		]),
	},
]))

export const primitiveArrayType: Parser<PrimitiveArrayTypeNode> = typeBase('mcdoc:type/primitive_array', syntax([
	literal(['byte', 'int', 'long']),
	atIntRange,
	keyword('[]', { allowedChars: new Set(['[', ']']), colorTokenType: 'type' }),
	atIntRange,
]))

export const listType: Parser<ListTypeNode> = typeBase('mcdoc:type/list', syntax([
	marker('['),
	{ get: () => type },
	punctuation(']'),
	atIntRange,
], true))

export const tupleType: Parser<TupleTypeNode> = typeBase('mcdoc:type/tuple', syntax([
	marker('['),
	{ get: () => type },
	marker(','),
	select([
		{ prefix: ']', parser: punctuation(']') },
		{
			parser: syntax([
				{ get: () => type },
				syntaxRepeat(syntax([marker(','), { get: () => failOnEmpty(type) }], true), true),
				optional(marker(',')),
				punctuation(']'),
			], true),
		},
	]),
], true))

export const dispatcherType: Parser<DispatcherTypeNode> = typeBase('mcdoc:type/dispatcher', syntax([
	failOnError(resLoc({ category: 'mcdoc/dispatcher' })),
	indexBody(),
]))

export const unionType: Parser<UnionTypeNode> = typeBase('mcdoc:type/union', syntax([
	marker('('),
	select([
		{ prefix: ')', parser: punctuation(')') },
		{
			parser: syntax([
				{ get: () => type },
				syntaxRepeat(syntax([marker('|'), { get: () => failOnEmpty(type) }], true), true),
				optional(marker('|')),
				punctuation(')'),
			], true),
		},
	]),
]))

export const pathType: InfallibleParser<PathTypeNode> = typeBase('mcdoc:type/path', syntax([
	path,
	optional(syntax([
		marker('<'),
		select([
			{ prefix: '>', parser: punctuation('>') },
			{
				parser: syntax([
					{ get: () => type },
					syntaxRepeat(syntax([marker(','), { get: () => failOnEmpty(type) }], true), true),
					optional(marker(',')),
					punctuation('>'),
				], true),
			},
		]),
	])),
]))

export const type: InfallibleParser<TypeNode> = any([
	anyType,
	booleanType,
	dispatcherType,
	enum_,
	listType,
	literalType,
	numericType,
	primitiveArrayType,
	stringType,
	struct,
	tupleType,
	unionType,
	pathType,
])
