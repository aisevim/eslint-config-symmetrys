import pluginComments from 'eslint-plugin-eslint-comments'

import { createConfig } from '../utils.js'

export async function commentsConfig({ options = {} }) {
  return createConfig(options, {
    name: 'main:comments',
    plugins: {
      comments: pluginComments,
    },
    rules: {
      'comments/no-duplicate-disable': 'error',
      'comments/no-unlimited-disable': 'error',
      'comments/no-unused-disable': 'error',
      'comments/no-unused-enable': 'error',
      'comments/no-restricted-disable': 'error',
    },
  })
}
