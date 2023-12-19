import { globSync } from 'glob'

import { GLOBS_DEFAULT_IGNORES, GLOBS_TS_CONFIGS_ROOT, GLOB_TSX, GLOB_TS } from '../globs.js'
import { renameRules, createConfig, getGlobFromExtension, interopDefault } from '../utils.js'

function getRenamedRules(rules) {
  return renameRules(rules, '@typescript-eslint/', 'ts/')
}

function checkTsConfigPresence() {
  return !!globSync(GLOBS_TS_CONFIGS_ROOT, { ignore: GLOBS_DEFAULT_IGNORES, dot: true })?.length
}

export function getParserOptionsConfig(options, settings, pluginTS) {
  if (
    options?.ts?.merge?.languageOptions?.parserOptions?.project ||
    options?.ts?.erase?.languageOptions?.parserOptions?.project
  ) {
    return null
  }

  const dirname = process.cwd()
  const project = settings?.tsproject ?? checkTsConfigPresence()

  return project ?
    {
      parserOptions: {
        project,
        tsConfigRootDir: dirname,
      },
      rules: getRenamedRules(pluginTS.configs['strict-type-checked'].rules),
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
        ...getRenamedRules(pluginTS.configs['eslint-recommended'].overrides[0].rules),
        ...getRenamedRules(pluginTS.configs.strict.rules),
        ...parserOptionsConfig?.rules,
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
