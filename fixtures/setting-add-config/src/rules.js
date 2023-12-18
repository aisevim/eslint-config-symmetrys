// First Config eslintPluginRecommended plugin
// error eslint-plugin/prefer-output-null
import { RuleTester } from 'eslint'

const Tester = new RuleTester

Tester.run('foo', 'bar', {
  valid: [],
  invalid: [{ code: 'foo', output: 'foo', errors: [{ message: 'bar' }] }],
})

// Second Config
// error eslint-plugin/test-case-shorthand-strings
Tester.run('example-rule', 'rule', {
  valid: [
    'validTestCase;',
    {
      code: 'anotherValidTestCase;',
    },
  ],
  invalid: [],
})
