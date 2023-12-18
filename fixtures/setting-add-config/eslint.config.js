import symmertry from 'eslint-config-symmetrys'
import eslintPluginRecommended from 'eslint-plugin-eslint-plugin/configs/recommended'

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
