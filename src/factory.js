import gitignoreConfig from 'eslint-config-flat-gitignore'

import {
  ignore,
  javascript,
  node,
  perfectionist,
  promise,
  unicorn,
  comments,
  imports,
  specific as specificConfig,
  yaml as yamlConfig,
  stylistic as stylisticConfig,
  jsonc as jsoncConfig,
  jsDoc as jsDocConfig,
  security as securityConfig,
  markdown as markdownConfig,
  typescript as tsConfig,
  vitest as vitestConfig,
  vue as vueConfig,
} from './configs/index.js'
import { configIsEnabled, moduleExists, toFlatConfigs } from './utils.js'

function config(options = {}) {
  const {
    vue = moduleExists('vue'),
    vitest = moduleExists('vitest'),
    ts = moduleExists('typescript'),
    markdown = true,
    security = true,
    jsDoc = true,
    yaml = true,
    json = true,
    stylistic = true,
    gitignore = true,
    specific = true,
  } = options
  const extensions = []

  if (gitignore) {
    extensions.push(gitignoreConfig({ strict: false }))
  }

  const configs = [
    ignore(),
    javascript(),
    node(),
    promise(),
    perfectionist(),
    unicorn(),
    comments(),
    imports(),
  ]

  if (configIsEnabled(specific)) {
    configs.push(specificConfig())
  }

  if (configIsEnabled(stylistic)) {
    configs.push(stylisticConfig())
  }

  if (configIsEnabled(json)) {
    configs.push(jsoncConfig())
  }

  if (configIsEnabled(yaml)) {
    configs.push(yamlConfig())
  }

  if (configIsEnabled(jsDoc)) {
    configs.push(jsDocConfig())
  }

  if (configIsEnabled(security)) {
    configs.push(securityConfig())
  }

  if (configIsEnabled(markdown)) {
    configs.push(markdownConfig())
  }

  if (configIsEnabled(vue)) {
    configs.push(vueConfig({ ts }))
    extensions.push('.vue')
  }

  if (configIsEnabled(vitest)) {
    configs.push(vitestConfig())
  }

  if (configIsEnabled(ts)) {
    configs.push(tsConfig({ options: ts, extensions }))
  }

  return toFlatConfigs(configs)
}

export default config
