import pluginComments from 'eslint-plugin-eslint-comments'

import { createConfig } from '../utils.js'

export async function eslintCommentsConfig({ options = {} }) {
  return createConfig(options, {
    name: 'main:eslint-comments',
    plugins: {
      'eslint-comments': pluginComments,
    },
    rules: {
      'eslint-comments/no-duplicate-disable': 'error',
      'eslint-comments/no-unlimited-disable': 'error',
      'eslint-comments/no-unused-disable': 'error',
      'eslint-comments/no-unused-enable': 'error',
      'eslint-comments/no-restricted-disable': 'error',
    },
  })
}
