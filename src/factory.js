import gitignoreConfig from 'eslint-config-flat-gitignore'

import {
  ignoreConfig,
  javascriptConfig,
  nodeConfig,
  perfectionistConfig,
  promiseConfig,
  unicornConfig,
  commentsConfig,
  importsConfig,
  specificConfig,
  yamlConfig,
  stylisticConfig,
  jsoncConfig,
  jsDocConfig,
  securityConfig,
  markdownConfig,
  typescriptConfig,
  vitestConfig,
  vueConfig,
  storybookConfig,
} from './configs/index.js'
import { configIsEnabled, moduleExists, toFlatConfigs } from './utils.js'

function config(options = {}) {
  const {
    vue = moduleExists('vue'),
    vitest = moduleExists('vitest'),
    ts = moduleExists('typescript'),
    storybook = moduleExists('storybook'),
    markdown = true,
    security = true,
    jsDoc = true,
    yaml = true,
    json = true,
    stylistic = true,
    gitignore = true,
    specific = true,
    ignore = {},
    javascript = {},
    node = {},
    promise = {},
    perfectionist = {},
    unicorn = {},
    comments = {},
    imports = {},
    settings = {},
  } = options
  const configs = []
  const extensions = []

  if (configIsEnabled(vue)) {
    extensions.push('vue')
  }

  if (gitignore) {
    configs.push(gitignoreConfig({ strict: false }))
  }

  configs.push(
    ignoreConfig({ options: ignore }),
    javascriptConfig({ options: javascript }),
    nodeConfig({ options: node }),
    promiseConfig({ options: promise }),
    perfectionistConfig({ options: perfectionist }),
    unicornConfig({ options: unicorn }),
    commentsConfig({ options: comments }),
    importsConfig({ options: imports }),
  )

  if (configIsEnabled(ts)) {
    configs.push(typescriptConfig({ options: ts, extensions, settings }))
  }

  if (configIsEnabled(vue)) {
    configs.push(vueConfig({ options: vue, ts }))
  }

  if (configIsEnabled(specific)) {
    configs.push(specificConfig())
  }

  if (configIsEnabled(stylistic)) {
    configs.push(stylisticConfig({ options: stylistic }))
  }

  if (configIsEnabled(json)) {
    configs.push(jsoncConfig({ options: json }))
  }

  if (configIsEnabled(yaml)) {
    configs.push(yamlConfig({ options: yaml }))
  }

  if (configIsEnabled(jsDoc)) {
    configs.push(jsDocConfig({ options: jsDoc }))
  }

  if (configIsEnabled(security)) {
    configs.push(securityConfig({ options: security }))
  }

  if (configIsEnabled(markdown)) {
    configs.push(markdownConfig({ options: markdown }))
  }

  if (configIsEnabled(vitest)) {
    configs.push(vitestConfig({ options: vitest }))
  }

  if (configIsEnabled(storybook)) {
    configs.push(storybookConfig({ options: storybook }))
  }

  return toFlatConfigs(...configs, ...settings?.addConfigs ?? [])
}

export default config
