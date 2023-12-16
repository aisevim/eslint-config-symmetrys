import pluginYaml from 'eslint-plugin-yml'
import parserYaml from 'yaml-eslint-parser'

import { GLOB_YAML } from '../globs.js'
import { createConfig } from '../utils.js'

export async function yamlConfig({ options = {} }) {
  return createConfig(options, {
    files: [GLOB_YAML],
    plugins: {
      yaml: pluginYaml,
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
  })
}
