import perfect from 'eslint-plugin-perfectionist'

export async function perfectionist() {
	return {
		files: ["**/*.?([cm])[jt]s?(x)"],
		plugins: {
			perfectionist: perfect,
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
