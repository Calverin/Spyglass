// This file is generated by `_generate.ts`. Do not modify by hand.
import { showWhitespaceGlyph, testParser } from '@spyglassmc/core/test-out/utils'
import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { struct } from '@spyglassmc/mcdoc/lib/parser'
import { McdocParserTestSuites } from '../../_suites'

describe('mcdoc struct', () => {
	for (const content of McdocParserTestSuites['syntax/type'].struct.content) {
		it(`Parse "${showWhitespaceGlyph(content)}"`, () => {
			snapshot(testParser(struct, content))
		})
	}
})
