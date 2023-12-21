import { GLOB_TSX, GLOB_TS } from '../globs.js'
import { renameRules, createConfig, getGlobFromExtension, interopDefault } from '../utils.js'

export function getParserOptionsConfig(options, settings, pluginTS) {
  if (
    options?.merge?.languageOptions?.parserOptions?.project ||
    options?.erase?.languageOptions?.parserOptions?.project
  ) {
    return null
  }

  const dirname = process.cwd()
  const project = settings?.tsproject

  return project ?
    {
      parserOptions: {
        project,
        tsConfigRootDir: dirname,
      },
      rules: renameRules(pluginTS.configs['strict-type-checked'].rules, '@typescript-eslint/', 'ts/'),
    } :
    null
}

export async function typescriptConfig({ options = {}, extensions = [], settings = {} }) {
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
  const parserOptionsConfig = getParserOptionsConfig(options, settings, pluginTS)

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
          ...parserOptionsConfig?.parserOptions,
        },
      },
      rules: {
        ...renameRules(pluginTS.configs['eslint-recommended'].overrides[0].rules, '@typescript-eslint/', 'ts/'),
        ...renameRules(pluginTS.configs.strict.rules, '@typescript-eslint/', 'ts/'),

        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-unused-vars': 'off',
        'ts/no-explicit-any': 'off',
        'ts/no-dynamic-delete': 'off',
        'ts/no-extraneous-class': 'off',
        'ts/no-invalid-void-type': 'off',
        'ts/no-non-null-assertion': 'off',
        'ts/no-useless-constructor': 'off',
        'ts/triple-slash-reference': 'off',
        'ts/unified-signatures': 'off',

        'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        'ts/ban-types': ['error', { types: { Function: false } }],
        'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
        'ts/no-import-type-side-effects': 'error',
        'ts/no-loss-of-precision': 'error',
        'ts/no-redeclare': 'error',
        'ts/no-require-imports': 'error',

        ...parserOptionsConfig?.rules,
      },
    }),
    {
      files: ['**/*.d.ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'ts/no-unused-vars': 'off',
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
