import * as Configs from './configs/index.js'
import { VUE_GLOB } from './constants.js'
import { moduleExists } from './utils.js'

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
  specialPackageJson,
  specialReleaseIt,
  specialTsConfig,
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
    ignore(),
    javascript(),
    node({ ts }),
    promise({ ts }),
    stylistic({ ts }),
    perfectionist({ ts }),
    unicorn({ ts }),
    jsonc(),
    yaml(),
    jsDoc({ ts }),
    comments({ ts }),
    imports({ ts }),
    specialPackageJson(),
    specialReleaseIt(),
    specialTsConfig(),
  ]

  if (vue) {
    configs.push(vueConfig())
    extensions.push(VUE_GLOB)
  }

  if (vitest) {
    configs.push(vitestConfig())
  }

  if (ts) {
    configs.push(tsConfig({ extensions }))
  }

  return configs
}

export default config
