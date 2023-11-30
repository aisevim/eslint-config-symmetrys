import {
  ignore,
  javascript,
  stylistic,
  node,
  // perfectionist,
  promise,
  unicorn,
  jsonc,
  vitest,
  yaml,
  jsDoc,
  vue,
  comments,
  specialPackageJson,
  specialReleaseIt,
  specialTsConfig,
} from './configs/index.js'

const config = []

config.push(
  ignore(),
  javascript(),
  node(),
  promise(),
  stylistic(),
  // perfectionist(),
  unicorn(),
  jsonc(),
  vitest(),
  yaml(),
  jsDoc(),
  vue(),
  comments(),
  specialPackageJson(),
  specialReleaseIt(),
  specialTsConfig(),
)

export default () => config
