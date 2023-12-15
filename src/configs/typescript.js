import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { globSync } from 'glob'

import { DEFAULT_IGNORES, ROOT_TS_CONFIG_GLOB, TSX_GLOB, TS_GLOB } from '../constants.js'
import { renameRules } from '../utils.js'

function getRenamedRules(rules) {
  return renameRules(rules, '@typescript-eslint/', 'ts/')
}

function checkTsConfigPresence() {
  return !!globSync(ROOT_TS_CONFIG_GLOB, { ignore: DEFAULT_IGNORES, dot: true })?.length
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
      rules: getRenamedRules(typescriptPlugin.configs['strict-type-checked'].rules),
    } :
    {
      rules: getRenamedRules(typescriptPlugin.configs.strict.rules),
    }

  baseConfig.rules = {
    ...getRenamedRules(typescriptPlugin.configs['eslint-recommended'].overrides[0].rules),
    ...baseConfig.rules,
  }

  return baseConfig
}

export async function typescript({ options, extensions }) {
  const tsConfigFileOptions = getTsConfigOptions(options?.project)

  return [
    {
      plugins: {
        ts: typescriptPlugin,
      },
    },
    {
      files: [TS_GLOB, TSX_GLOB],
      languageOptions: {
        parser: typescriptParser,
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
    },
  ]
}
