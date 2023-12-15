import md from 'eslint-plugin-markdown'

import { LANGS_IN_MARKDOWN_GLOB, MARKDOWN_GLOB } from '../constants.js'

export async function markdown() {
  return [
    {
      files: [MARKDOWN_GLOB],
      plugins: {
        markdown: md,
      },
      processor: md.processors.markdown,
    },
    {
      files: [LANGS_IN_MARKDOWN_GLOB],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      rules: {
        ...md.configs.recommended.overrides[1].rules,

        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ]
}
