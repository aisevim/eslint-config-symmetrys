import symmertry from '../../src/index.js'

export default symmertry({
  ts: true,
  json: true,
  stylistic: true,
  settings: {
    strictFormat: {
      scriptFiles: ['**/strict.js', '**/strict.ts'],
      jsonFiles: ['**/strict.json'],
    },
  },
})
