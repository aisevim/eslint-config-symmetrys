import symmertry from 'eslint-config-symmetrys'

export default symmertry({
  ts: {
    merge: {
      languageOptions: {
        parserOptions: {
          project: './tsconfigNotFinded.json',
          tsConfigRootDir: process.cwd(),
        },
      },
      rules: {
        'no-undef': 'off',
      },
    },
  },
  // settings: {
  //   tsproject: './not-searched',
  // },
})
