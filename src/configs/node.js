import pluginNode from 'eslint-plugin-n'

export async function node() {
  return {
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
  }
}
