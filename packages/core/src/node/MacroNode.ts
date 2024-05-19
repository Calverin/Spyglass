import type { ColorTokenType } from '../processor/index.js'
import type { RangeLike } from '../source/index.js'
import { Range } from '../source/index.js'
import type { AstNode } from './AstNode.js'

export interface MacroOptions {
	pool: string[]
	colorTokenType?: ColorTokenType
}

export interface MacroBaseNode extends AstNode {
	readonly options: MacroOptions
	key: string
}

export interface MacroNode extends MacroBaseNode {
	readonly type: 'macro'
}
export namespace MacroNode {
	/* istanbul ignore next */
	export function is(obj: object | undefined): obj is MacroNode {
		return (obj as MacroNode | undefined)?.type === 'macro'
	}

	export function mock(
		range: RangeLike,
		options: MacroOptions,
	): MacroNode {
		return {
			type: 'macro',
			range: Range.get(range),
			options,
			key: '',
		}
	}
}
