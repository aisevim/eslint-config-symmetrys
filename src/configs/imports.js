import importsPlugin from 'eslint-plugin-i'

import { JS_GLOB, TS_GLOB } from '../constants.js'

export async function imports({ ts }) {
  const files = [JS_GLOB]
  let tsConfig = {}

  if (ts) {
    files.push(TS_GLOB)
    tsConfig = {
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    }
  }

  return {
    files,
    plugins: {
      import: importsPlugin,
    },
    rules: {
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': 'error',
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
      'import/no-unresolved': 'error',
    },
    ...tsConfig,
  }
}
