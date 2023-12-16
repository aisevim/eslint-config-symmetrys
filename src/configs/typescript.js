import pluginTS from '@typescript-eslint/eslint-plugin'
import parserTS from '@typescript-eslint/parser'
import { globSync } from 'glob'

import { GLOBS_DEFAULT_IGNORES, GLOBS_TS_CONFIGS_ROOT, GLOB_TSX, GLOB_TS } from '../globs.js'
import { renameRules, createConfig } from '../utils.js'

function getRenamedRules(rules) {
  return renameRules(rules, '@typescript-eslint/', 'ts/')
}

function checkTsConfigPresence() {
  return !!globSync(GLOBS_TS_CONFIGS_ROOT, { ignore: GLOBS_DEFAULT_IGNORES, dot: true })?.length
}

export function getTsConfigOptions(project) {
  const dirname = process.cwd()
  const tsConfigExist = checkTsConfigPresence()
  const hasProject = project ?? tsConfigExist

  const baseConfig = hasProject ?
    {
      parserOptions: {
        project: hasProject,
        tsConfigRootDir: dirname,
      },
      rules: getRenamedRules(pluginTS.configs['strict-type-checked'].rules),
    } :
    {
      rules: getRenamedRules(pluginTS.configs.strict.rules),
    }

  baseConfig.rules = {
    ...getRenamedRules(pluginTS.configs['eslint-recommended'].overrides[0].rules),
    ...baseConfig.rules,
  }

  return baseConfig
}

export async function typescriptConfig({ options = {}, extensions }) {
  const tsConfigFileOptions = getTsConfigOptions(options?.project)

  return [
    {
      plugins: {
        ts: pluginTS,
      },
    },
    createConfig(options, {
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: parserTS,
        parserOptions: {
          extraFileExtensions: extensions,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          ...tsConfigFileOptions?.parserOptions,
        },
      },
      rules: {
        ...tsConfigFileOptions.rules,
      },
    }),
  ]
}
