import { GLOB_TSX, GLOB_TS } from '../globs.js'
import { renameRules, createConfig, getGlobFromExtension, interopDefault } from '../utils.js'

export async function typescriptConfig({ options = {}, extensions = [] }) {
  const files = [
    GLOB_TS,
    GLOB_TSX,
    ...extensions.map(ext => getGlobFromExtension(ext)),
  ]
  const [
    pluginTS,
    parserTS,
  ] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ])

  return [
    {
      name: 'setup:typescript',
      plugins: {
        ts: pluginTS,
      },
    },
    createConfig(options, {
      name: 'main:typescript',
      files,
      languageOptions: {
        parser: parserTS,
        parserOptions: {
          extraFileExtensions: extensions.map(ext => `.${ ext }`),
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
        },
      },
      rules: {
        ...renameRules(pluginTS.configs['eslint-recommended'].overrides[0].rules, '@typescript-eslint/', 'ts/'),
        ...renameRules(pluginTS.configs.strict.rules, '@typescript-eslint/', 'ts/'),
      },
    }),
    {
      files: ['**/*.d.ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.ts?(x)'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      rules: {
        'ts/no-require-imports': 'off',
        'ts/no-var-requires': 'off',
      },
    },
  ]
}
