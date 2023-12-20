import eslintPluginRecommended from 'eslint-plugin-eslint-plugin/configs/recommended'

import symmertry from '../../src/index.js'

export default symmertry({
  settings: {
    addConfigs: [
      // Config 1
      eslintPluginRecommended,

      // Config 2
      {
        rules: {
          'eslint-plugin/test-case-shorthand-strings': 'error',
        },
      },
    ],
  },
})
