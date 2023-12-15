import { execSync } from 'node:child_process'
import { join } from 'node:path'

import { describe, it } from 'vitest'

const dirname = process.cwd()

describe('Rules', () => {
  it('check rules applied on files per configs', ({ expect }) => {
    const target = join(dirname, 'fixtures/default')
    const config = join(dirname, 'fixtures/default/eslint.config.js')
    let output

    try {
      execSync(`eslint ${ target } -c ${ config }`, { encoding: 'utf-8' })
    } catch (error) {
      output = error.stdout.replaceAll(dirname, '')
    }

    expect(output).toMatchInlineSnapshot(`
      "
      /fixtures/default/App-ts.vue
         7:1   error    '<script setup>' should be above '<template>' on line 1                                       vue/block-order
        10:1   error    Module imports itself                                                                         import/no-self-import
        10:8   error    'AppTs' is defined but never used                                                             ts/no-unused-vars
        14:1   warning  @param "fooo" does not match an existing function parameter                                   jsdoc/check-param-names
        22:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        26:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        31:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/default/App.vue
         7:1   error    '<script setup>' should be above '<template>' on line 1                                       vue/block-order
        10:1   error    Module imports itself                                                                         import/no-self-import
        10:8   error    'App' is defined but never used                                                               ts/no-unused-vars
        14:1   warning  @param "fooo" does not match an existing function parameter                                   jsdoc/check-param-names
        22:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        26:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        31:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/default/exampl.yaml
        3:1  error  Empty mapping keys are forbidden  yaml/no-empty-key

      /fixtures/default/example.json
        3:3  error  Duplicate key 'a'  jsonc/no-dupe-keys

      /fixtures/default/index.js
         3:1   error    Module imports itself                                                                         import/no-self-import
         3:8   error    'file' is defined but never used                                                              no-unused-vars
         7:1   warning  Expected @param names to be "foo". Got "fooo"                                                 jsdoc/check-param-names
        14:21  error    Use path.join() or path.resolve() instead of string concatenation                             node/no-path-concat
        17:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        21:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        25:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/default/index.ts
         3:1   error    Module imports itself                                                                         import/no-self-import
         3:8   error    'file' is defined but never used                                                              ts/no-unused-vars
         7:1   warning  @param "fooo" does not match an existing function parameter                                   jsdoc/check-param-names
        14:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        18:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        23:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/default/markdown.md
         7:19  error  Unexpected string concatenation of literals              no-useless-concat
        11:34  error  The array literal notation [] is preferable              ts/no-array-constructor
        16:40  error  Extra semicolon                                          stylistic/semi
        22:13  error  Unexpected trailing comma                                jsonc/comma-dangle
        29:1   error  Empty mapping keys are forbidden                         yaml/no-empty-key
        37:1   error  '<script setup>' should be above '<template>' on line 1  vue/block-order

      ✖ 35 problems (31 errors, 4 warnings)
        6 errors and 0 warnings potentially fixable with the \`--fix\` option.

      "
    `)
  })
})
