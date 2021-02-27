import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { error } from '../../lib'
import { showWhitespaceGlyph, testParser } from '../utils'

describe('error()', () => {
	const suites: { content: string }[] = [
		{ content: '' },
		{ content: '\t' },
		{ content: 'whatever\nall errors' },
	]
	for (const { content } of suites) {
		it(`Parse "${showWhitespaceGlyph(content)}"`, () => {
			snapshot(testParser(error, content))
		})
	}
})
