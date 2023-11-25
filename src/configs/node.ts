import node from 'eslint-plugin-n'

export async function node() {
	return {
		files: ["**/*.?([cm])[jt]s?(x)"],
		plugins: {
			n: node
		},
		rules: {
			'n/handle-callback-err': ['error', '^(err|error)$'],
			'n/no-deprecated-api': 'error',
			'n/no-exports-assign': 'error',
			'n/no-new-require': 'error',
			'n/no-path-concat': 'error',
			'n/prefer-promises/fs': 'error',
			'n/process-exit-as-throw': 'error',
		}
	}
}
