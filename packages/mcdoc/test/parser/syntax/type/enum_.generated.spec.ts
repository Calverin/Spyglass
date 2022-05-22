// This file is generated by `_generate.ts`. Do not modify by hand.
import { showWhitespaceGlyph, testParser } from '@spyglassmc/core/test-out/utils'
import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { enum_ } from '@spyglassmc/mcdoc/lib/parser'
import { McdocParserTestSuites } from '../../_suites'

describe('mcdoc enum_', () => {
	for (const content of McdocParserTestSuites['syntax/type'].enum_.content) {
		it(`Parse "${showWhitespaceGlyph(content)}"`, () => {
			snapshot(testParser(enum_, content))
		})
	}
})
