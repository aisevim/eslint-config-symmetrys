import pluginTS from '@typescript-eslint/eslint-plugin'
import parserTS from '@typescript-eslint/parser'
import { globSync } from 'glob'

import { GLOBS_DEFAULT_IGNORES, GLOBS_TS_CONFIGS_ROOT, GLOB_TSX, GLOB_TS } from '../globs.js'
import { renameRules, createConfig, getGlobFromExtension } from '../utils.js'

function getRenamedRules(rules) {
  return renameRules(rules, '@typescript-eslint/', 'ts/')
}

function checkTsConfigPresence() {
  return !!globSync(GLOBS_TS_CONFIGS_ROOT, { ignore: GLOBS_DEFAULT_IGNORES, dot: true })?.length
}

export function getParserOptionsConfig(options, settings) {
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

export const disabledTypescriptTypedRules = getRenamedRules(pluginTS.configs['disable-type-checked'].rules)

export async function typescriptConfig({ options = {}, extensions = [], settings = {} }) {
  const parserOptionsConfig = getParserOptionsConfig(options, settings)
  const files = [
    GLOB_TS,
    GLOB_TSX,
    ...extensions.map(ext => getGlobFromExtension(ext)),
  ]

  return [
    {
      plugins: {
        ts: pluginTS,
      },
    },
    createConfig(options, {
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
  ]
}
