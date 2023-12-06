import ymlPlugin from 'eslint-plugin-yml'
import parserYaml from 'yaml-eslint-parser'

import { YAML_GLOB } from '../constants.js'

export async function yaml() {
  return {
    files: [YAML_GLOB],
    plugins: {
      yaml: ymlPlugin,
    },
    languageOptions: {
      parser: parserYaml,
    },
    rules: {
      'yaml/block-sequence-hyphen-indicator-newline': 'error',
      'yaml/block-sequence': ['error', 'always'],
      'yaml/indent': [
        'error',
        2,
        {
          indentBlockSequences: true,
          indicatorValueIndent: 2,
        },
      ],
      'yaml/no-empty-key': 'error',
      'yaml/no-empty-sequence-entry': 'error',
      'yaml/quotes': ['error', { avoidEscape: false, prefer: 'double' }],
      'yaml/flow-sequence-bracket-newline': 'error',
      'yaml/key-spacing': 'error',
      'yaml/no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],
    },
  }
}
