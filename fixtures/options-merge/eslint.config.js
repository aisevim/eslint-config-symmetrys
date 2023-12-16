import symmertry from 'eslint-config-symmetrys'

export default symmertry({
  ts: false,
  vue: false,
  markdown: false,
  security: {
    merge: {
      rules: {
        'security/detect-bidi-characters': 'off',
      },
    },
  },
  jsDoc: false,
  yaml: {
    merge: {
      files: ['**/*.fake-yyy']
    }
  },
  json: false,
  stylistic: false,
  gitignore: false,
  specific: false,
})
