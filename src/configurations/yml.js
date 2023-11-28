import ymlPlugin from 'eslint-plugin-yml'

export async function yml() {
	return {
		files: ["**/*.yaml", "**/*.yml"],
		plugins: {
			yml: ymlPlugin
		},
		languageOptions: {
			parser: parserYaml,
		},
		rules: {
			'yml/block-sequence-hyphen-indicator-newline': 'error',
			'yml/block-sequence': ['error', 'always'],
			'yml/indent': [
				'error',
				2,
				{
					indentBlockSequences: true,
					indicatorValueIndent: 1,
				}
			],
			'yml/no-empty-key': 'error',
			'yml/no-empty-sequence-entry': 'error',
			'yml/no-tab-indent': 'error',
			'yaml/quotes': ['error', { avoidEscape: false, prefer: 'double' }],
			'yml/flow-sequence-bracket-newline': 'error',
			'yml/key-spacing': 'error',
			'yml/no-multiple-empty-lines': [
				'error',
				{
					max: 2,
					maxBOF: 0,
					maxEOF: 1
				}
			],
		}
	}
}
