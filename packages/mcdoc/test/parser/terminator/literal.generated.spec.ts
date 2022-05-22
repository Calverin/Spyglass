// This file is generated by `_generate.ts`. Do not modify by hand.
import { showWhitespaceGlyph, testParser } from '@spyglassmc/core/test-out/utils'
import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { literal } from '@spyglassmc/mcdoc/lib/parser'
import { McdocParserTestSuites } from '../_suites'

describe('mcdoc literal()', () => {
	for (const content of McdocParserTestSuites['terminator'].literal.content) {
		it(`Parse "${showWhitespaceGlyph(content)}"`, () => {
			snapshot(testParser(literal('foo'), content))
		})
	}
})
