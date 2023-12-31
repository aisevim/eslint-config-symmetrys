import pluginNode from 'eslint-plugin-n'

import { createConfig } from '../utils.js'

export async function nodeConfig({ options = {} }) {
  return createConfig(options, {
    name: 'main:node',
    plugins: {
      node: pluginNode,
    },
    rules: {
      'node/handle-callback-err': ['error', '^(err|error)$'],
      'node/no-deprecated-api': 'error',
      'node/no-exports-assign': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/prefer-promises/fs': 'error',
      'node/process-exit-as-throw': 'error',
    },
  })
}
