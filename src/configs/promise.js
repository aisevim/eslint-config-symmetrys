import promisePlugin from 'eslint-plugin-promise'

export async function promise() {
	return {
		files: ["**/*.?([cm])[jt]s?(x)"],
		plugins: {
			promise: promisePlugin
		},
		rules: {
			'promise/no-callback-in-promise': 'error',
			'promise/no-multiple-resolved': 'error',
			'promise/no-nesting': 'error',
			'promise/no-new-statics': 'error',
			'promise/no-return-in-finally': 'error',
			'promise/no-return-wrap': 'error',
			'promise/prefer-await-to-then': 'error',
			'promise/valid-params': 'error',
		}
	}
}