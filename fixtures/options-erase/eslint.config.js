import symmertry from 'eslint-config-symmetrys'

export default symmertry({
  ts: false,
  vue: false,
  markdown: false,
  security: {
    erase: {
      rules: {
        'security/detect-disable-mustache-escape': 'error',
      },
    },
  },
  jsDoc: false,
  yaml: {
    erase: {
      files: ['**/*.fake-yyy'],
    },
  },
  json: false,
  stylistic: false,
  gitignore: false,
  specific: false,
  vitest: false,
})
