import { GLOB_YAML } from '../globs.js'
import { createConfig, interopDefault } from '../utils.js'

export async function yamlConfig({ options = {} }) {
  const [pluginYaml, parserYaml] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser')),
  ])

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
