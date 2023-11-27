import jsoncPlugin from 'eslint-plugin-jsonc'

export async function jsonc() {
	return {
		files: ["**/*.?([cm])[jt]s?(x)"],
		plugins: {
			jsonc: jsoncPlugin
		},
		rules: {
			'jsonc/no-bigint-literals': 'error',
			'jsonc/no-binary-expression': 'error',
			'jsonc/no-binary-numeric-literals': 'error',
			'jsonc/no-escape-sequence-in-identifier': 'error',
			'jsonc/no-hexadecimal-numeric-literals': 'error',
			'jsonc/no-infinity': 'error',
			'jsonc/no-nan': 'error',
			'jsonc/no-number-props': 'error',
			'jsonc/no-numeric-separators': 'error',
			'jsonc/no-octal-numeric-literals': 'error',
			'jsonc/no-parenthesized': 'error',
			'jsonc/no-plus-sign': 'error',
			'jsonc/no-regexp-literals': 'error',
			'jsonc/no-template-literals': 'error',
			'jsonc/no-unicode-codepoint-escapes': 'error',
			'jsonc/sort-array-values': 'error',
			'jsonc/sort-keys': 'error',
			'jsonc/valid-json-number': 'error',
			'jsonc/vue-custom-block/no-parsing-error': 'error',
			'jsonc/array-bracket-newline': 'error',
			'jsonc/array-bracket-spacing': ['error', 'never'],
			'jsonc/comma-dangle': ['error', 'never'],
			'jsonc/comma-style': ['error', 'last'],
			'jsonc/indent': ['error', 2],
			'jsonc/key-spacing': [
				'error',
				{
					afterColon: true,
					beforeColon: false,
					mode: 'strict'
				}
			],
			'jsonc/no-dupe-keys': 'error',
			'jsonc/no-floating-decimal': 'error',
			'jsonc/no-octal': 'error',
			'jsonc/no-sparse-arrays': 'error',
			'jsonc/no-useless-escape': 'error',
			'jsonc/object-curly-newline': ['error', { consistent: true }],
			'jsonc/object-curly-spacing': ['error', 'always'],
			'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
			'jsonc/quote-props': ['error', 'always'],
			'jsonc/quotes': ['error', 'double'],
			'jsonc/space-unary-ops': 'error',
		}
	}
}
