import jsDocPlugin from 'eslint-plugin-jsdoc'

export async function jsDoc() {
	return {
		files: ["**/*.?([cm])[jt]s?(x)"],
		plugins: {
			jsdoc: jsDocPlugin
		},
		rules: {
			...jsDocPlugin.configs['flat/recommended-error'].rules,
		}
	}
}
