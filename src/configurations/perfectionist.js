import perfectionistPlugin from 'eslint-plugin-perfectionist'

import { JS_GLOB } from '../constants'

export async function perfectionist() {
	return {
		files: [JS_GLOB],
		plugins: {
			perfectionist: perfectionistPlugin,
		},
		rules: {
			'perfectionist/sort-classes': [
        'error',
        {
          type: 'natural',
          groups: [
						"static-property",
						"private-property",
						'property',
						'constructor',
						"static-method",
				    "private-method",
						'method',
						'unknown'
					],
        },
      ],
			'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          groups: [
						['builtin', 'external'],
						['internal', 'parent', 'sibling', 'index'],
						'style',
						['side-effect', 'side-effect-style'],
            ['type'],
						'object',
            'unknown',
          ],
          'newlines-between': 'always',
					'internal-pattern': [
            '~/**',
						'src/**',
						'@/**',
          ],
        },
      ],
			'perfectionist/sort-named-exports': ['error'],
			'perfectionist/sort-named-imports': ['error'],
		}
	}
}
