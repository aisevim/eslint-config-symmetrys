import md from 'eslint-plugin-markdown'

import { GLOB_LANGS_IN_MARKDOWN, GLOB_MARKDOWN } from '../globs.js'
import { renameRules, createConfig, interopDefault } from '../utils.js'

export async function markdownConfig({ options = {} }) {
  const pluginTS = await interopDefault(import('@typescript-eslint/eslint-plugin'))

  return [
    {
      name: 'setup:markdown',
      files: [GLOB_MARKDOWN],
      plugins: {
        markdown: md,
      },
      processor: md.processors.markdown,
    },
    createConfig(options, {
      name: 'main:markdown',
      files: [GLOB_LANGS_IN_MARKDOWN],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      rules: {
        ...md.configs.recommended.overrides[1].rules,
        ...renameRules(pluginTS.configs['disable-type-checked'].rules, '@typescript-eslint/', 'ts/'),

        'ts/comma-dangle': 'off',
        'ts/consistent-type-imports': 'off',
        'ts/no-extraneous-class': 'off',
        'ts/no-namespace': 'off',
        'ts/no-redeclare': 'off',
        'ts/no-require-imports': 'off',
        'ts/no-unused-vars': 'off',
        'ts/no-use-before-define': 'off',
        'ts/no-var-requires': 'off',

        'stylistic/eol-last': 'off',

        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-restricted-syntax': 'off',
        'no-unused-labels': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'unicode-bom': 'off',

        'import/no-extraneous-dependencies': 'off',
      },
    }),
  ]
}
