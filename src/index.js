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

  const configs = [
    gitignore({
      strict: false,
    }),
    ignore(),
    javascript(),
    node(),
    promise({ ts }),
    stylistic({ ts }),
    perfectionist({ ts }),
    unicorn({ ts }),
    jsonc(),
    yaml(),
    jsDoc({ ts }),
    comments({ ts }),
    imports({ ts }),
    specific(),
    security({ ts }),
  ]

  if (vue) {
    configs.push(vueConfig({ options: { ts } }))
  }

  if (vitest) {
    configs.push(vitestConfig())
  }

  if (ts) {
    configs.push(tsConfig({ options: ts }))
  }

  return toFlatConfigs(configs)
}

export default config
