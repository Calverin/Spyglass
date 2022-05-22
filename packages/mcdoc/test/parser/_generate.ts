import * as fs from 'fs'
import * as path from 'path'
import { McdocParserTestSuites } from './_suites'

// Generates test files for each mcdoc rule parser with test suites from `./suites.ts`.
// It is super laggy to have a giant snapshot file, hence why we separated the tests to multiple files.

const ShouldGenerate = true // Prevent from mis-triggering.

function template(parser: string, directory: string, functionParams = ''): string {
	return `// This file is generated by \`_generate.ts\`. Do not modify by hand.
import { showWhitespaceGlyph, testParser } from '@spyglassmc/core/test-out/utils'
import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { ${parser} } from '@spyglassmc/mcdoc/lib/parser'
import { McdocParserTestSuites } from '../${'../'.repeat([...directory].filter(c => c === '/').length)}_suites'

describe('mcdoc ${parser}${functionParams ? '()' : ''}', () => {
	for (const content of McdocParserTestSuites['${directory}'].${parser}.content) {
		it(\`Parse "\${showWhitespaceGlyph(content)}"\`, () => {
			snapshot(testParser(${parser}${functionParams}, content))
		})
	}
})
`
}

if (ShouldGenerate) {
	for (const [directory, parserSuites] of Object.entries(McdocParserTestSuites)) {
		for (const [parser, { functionParams }] of Object.entries(parserSuites)) {
			fs.writeFileSync(
				path.join(__dirname, directory, `${parser}.generated.spec.ts`),
				template(parser, directory, functionParams),
				{ encoding: 'utf-8' }
			)
		}
	}
}
