import pluginPerfectionist from 'eslint-plugin-perfectionist'

import { createConfig } from '../utils.js'

export async function perfectionistConfig({ options = {} }) {
  return createConfig(options, {
    name: 'main:perfectionist',
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-classes': [
        'error',
        {
          type: 'natural',
          groups: [
            'static-property',
            'private-property',
            'property',
            'constructor',
            'static-method',
            'private-method',
            'method',
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          'type': 'natural',
          'groups': [
            'builtin',
            'external',
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
      'perfectionist/sort-enums': ['error'],
      'perfectionist/sort-exports': ['error'],
      'perfectionist/sort-interfaces': ['error'],
      'perfectionist/sort-named-exports': ['error'],
    },
  })
}
