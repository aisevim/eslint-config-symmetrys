import jsDocPlugin from 'eslint-plugin-jsdoc'

import { JS_GLOB } from '../constants'

export async function jsDoc() {
	return {
		files: [JS_GLOB],
		plugins: {
			jsdoc: jsDocPlugin
		},
		rules: {
			...jsDocPlugin.configs['flat/recommended-error'].rules,
		}
	}
}
