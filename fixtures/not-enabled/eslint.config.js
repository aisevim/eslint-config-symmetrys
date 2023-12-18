import symmertry from 'eslint-config-symmetrys'

export default symmertry({
  ts: false,
  vue: false, // vueA11y not enabled
  storybook: false,
  cypress: false,
  markdown: false,
  security: false,
  jsDoc: false,
  yaml: false,
  json: false,
  stylistic: false,
  gitignore: false,
  specific: false,
})
