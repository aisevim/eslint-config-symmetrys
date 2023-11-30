import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

import { TS_GLOB } from '../constants.js'

export async function typescript({ extensions }) {
  return {
    files: [TS_GLOB],
    plugins: {
      ts: typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        extraFileExtensions: extensions,
        sourceType: 'module',
      },
    },
    rules: {
      ...typescriptPlugin.configs['eslint-recommended'].rules,
      ...typescriptPlugin.configs.strict.rules,

      'ts/array-type': ['error', { default: 'generic' }],
    },
  }
}
