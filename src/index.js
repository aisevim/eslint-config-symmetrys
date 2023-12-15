import gitignore from 'eslint-config-flat-gitignore'

import * as Configs from './configs/index.js'
import { moduleExists, toFlatConfigs } from './utils.js'

const {
  ignore,
  javascript,
  stylistic,
  node,
  perfectionist,
  promise,
  unicorn,
  jsonc,
  yaml,
  jsDoc,
  comments,
  imports,
  specific,
  security,
  markdown,
  typescript: tsConfig,
  vitest: vitestConfig,
  vue: vueConfig,
} = Configs

function config(options = {}) {
  const {
    vue = moduleExists('vue'),
    vitest = moduleExists('vitest'),
    ts = moduleExists('typescript'),
  } = options
  const extensions = []

  const configs = [
    gitignore({
      strict: false,
    }),
    ignore(),
    javascript(),
    node(),
    promise(),
    perfectionist(),
    unicorn(),
    jsonc(),
    yaml(),
    jsDoc(),
    comments(),
    imports(),
    specific(),
    security(),
    markdown(),
    stylistic(),
  ]

  if (vue) {
    configs.push(vueConfig({ ts }))
    extensions.push('.vue')
  }

  if (vitest) {
    configs.push(vitestConfig())
  }

  if (ts) {
    configs.push(tsConfig({ options: ts, extensions }))
  }

  return toFlatConfigs(configs)
}

export default config
