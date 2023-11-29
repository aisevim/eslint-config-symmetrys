import commentsPlugin from 'eslint-plugin-eslint-comments'

import { JS_GLOB } from '../constants'

export async function comments() {
	return {
		files: [JS_GLOB],
		plugins: {
			node: commentsPlugin
		},
		rules: {
			'eslint-comments/no-duplicate-disable': 'error',
			'eslint-comments/no-unlimited-disable': 'error',
			'eslint-comments/no-unused-disable': 'error',
			'eslint-comments/no-unused-enable': 'error',
			'eslint-comments/no-restricted-disable': 'error',
		}
	}
}
