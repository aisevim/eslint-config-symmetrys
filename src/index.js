import {
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
  typescript,
  vitest as vitestConfig,
  vue as vueConfig,
  specialPackageJson,
  specialReleaseIt,
  specialTsConfig,
} from './configs/index.js'
import { VUE_GLOB } from './constants.js'

function config(options = {}) {
  const {
    vue = false,
    vitest = false,
    ts = false,
  } = options
  const extensions = []

  const configs = [
    ignore(),
    javascript(),
    node(),
    promise(),
    stylistic(),
    perfectionist(),
    unicorn(),
    jsonc(),
    yaml(),
    jsDoc(),
    comments(),
    imports(),
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
    configs.push(typescript({
      extensions,
    }))
  }

  return configs
}

export default config
