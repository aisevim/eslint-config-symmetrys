import pluginImports from 'eslint-plugin-i'

import { createConfig } from '../utils.js'

export async function importsConfig({ options = {} }) {
  return createConfig(options, {
    name: 'main:imports',
    plugins: {
      import: pluginImports,
    },
    rules: {
      'import/no-empty-named-blocks': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': [
        'error', {
          noUselessIndex: false,
        },
      ],
      'import/consistent-type-specifier-style': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
    },
  })
}
