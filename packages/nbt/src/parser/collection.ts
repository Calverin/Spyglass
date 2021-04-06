import * as core from '@spyglassmc/core'
import { localize } from '@spyglassmc/locales'
import type { NbtByteArrayNode, NbtIntArrayNode, NbtListNode, NbtLongArrayNode } from '../node'
import { entry } from './entry'
import { primitive } from './primitive'

export const list: core.Parser<NbtListNode> = (src, ctx) => {
	const parser = core.list({ start: '[', value: entry, sep: ',', trailingSep: false, end: ']' })
	const ans = parser(src, ctx) as core.Mutable<NbtListNode>
	ans.type = 'nbt:list'
	ans.valueType = ans.children[0]?.value?.type

	// Check if every element is of the same type.
	if (ans.valueType) {
		for (const { value } of ans.children) {
			if (value && value.type !== ans.valueType) {
				ctx.err.report(
					localize('expected-got', [localize(`nbt.node.${ans.valueType.slice(4)}`), localize(`nbt.node.${value.type.slice(4)}`)]),
					value
				)
			}
		}
	}

	return ans
}


export const byteArray: core.Parser<NbtByteArrayNode> = (src, ctx) => {
	const parser = core.list({ start: '[B;', value: primitive, sep: ',', trailingSep: false, end: ']' })
	const ans = parser(src, ctx) as core.Mutable<NbtByteArrayNode>
	ans.type = 'nbt:byte_array'

	// Check if every element is of the required type.
	for (const { value } of ans.children) {
		if (value && value.type !== 'nbt:byte') {
			ctx.err.report(
				localize('expected-got', [localize('nbt.node.byte'), localize(`nbt.node.${value.type.slice(4)}`)]),
				value
			)
		}
	}

	return ans
}

export const intArray: core.Parser<NbtIntArrayNode> = (src, ctx) => {
	const parser = core.list({ start: '[I;', value: primitive, sep: ',', trailingSep: false, end: ']' })
	const ans = parser(src, ctx) as core.Mutable<NbtIntArrayNode>
	ans.type = 'nbt:int_array'

	// Check if every element is of the required type.
	for (const { value } of ans.children) {
		if (value && value.type !== 'nbt:int') {
			ctx.err.report(
				localize('expected-got', [localize('nbt.node.int'), localize(`nbt.node.${value.type.slice(4)}`)]),
				value
			)
		}
	}

	return ans
}

export const longArray: core.Parser<NbtLongArrayNode> = (src, ctx) => {
	const parser = core.list({ start: '[L;', value: primitive, sep: ',', trailingSep: false, end: ']' })
	const ans = parser(src, ctx) as core.Mutable<NbtLongArrayNode>
	ans.type = 'nbt:long_array'

	// Check if every element is of the required type.
	for (const { value } of ans.children) {
		if (value && value.type !== 'nbt:long') {
			ctx.err.report(
				localize('expected-got', [localize('nbt.node.long'), localize(`nbt.node.${value.type.slice(4)}`)]),
				value
			)
		}
	}

	return ans
}
