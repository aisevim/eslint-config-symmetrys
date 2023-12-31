import { execSync } from 'node:child_process'
import { join } from 'node:path'

import { describe, it } from 'vitest'

const dirname = process.cwd()

describe('Lint all files in real environnement (with package.json, install, etc...)', () => {
  it('Should return ESLint errors in output, need to have 1 or more errors per configs (except Vite)', ({ expect }) => {
    const target = join(dirname, 'fixtures/output-all-files')
    const config = join(dirname, 'fixtures/output-all-files/eslint.config.js')
    let output

    try {
      execSync(`eslint ${ target } -c ${ config }`, { encoding: 'utf-8' })
    } catch (error) {
      output = error.stdout.replaceAll(dirname, '')
    }

    expect(output).toMatchInlineSnapshot(`
      "
      /fixtures/output-all-files/App-ts.vue
         3:8   error    Elements with ARIA roles must use a valid, non-abstract ARIA role                             vue-a11y/aria-role
         8:1   error    '<script setup lang=ts>' should be above '<template>' on line 1                               vue/block-order
        11:1   error    Module imports itself                                                                         import/no-self-import
        11:8   error    'AppTs' is defined but never used                                                             ts/no-unused-vars
        15:1   warning  @param "fooo" does not match an existing function parameter                                   jsdoc/check-param-names
        23:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        27:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        32:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/output-all-files/App.vue
         3:8   error    Elements with ARIA roles must use a valid, non-abstract ARIA role                             vue-a11y/aria-role
         8:1   error    '<script setup>' should be above '<template>' on line 1                                       vue/block-order
        11:1   error    Module imports itself                                                                         import/no-self-import
        11:8   error    'App' is defined but never used                                                               ts/no-unused-vars
        15:1   warning  @param "fooo" does not match an existing function parameter                                   jsdoc/check-param-names
        23:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        27:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        32:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/output-all-files/Btn.stories.js
        1:1  error  The file should have at least one story export  storybook/story-exports

      /fixtures/output-all-files/cypress/e2e/cypress.cy.js
        3:5  error  Do not use cy.pause command  cypress/no-pause

      /fixtures/output-all-files/exampl.yaml
        3:1  error  Empty mapping keys are forbidden  yaml/no-empty-key

      /fixtures/output-all-files/example.json
        3:3  error  Duplicate key 'a'  jsonc/no-dupe-keys

      /fixtures/output-all-files/index.js
         3:1   error    Module imports itself                                                                         import/no-self-import
         3:8   error    'file' is defined but never used                                                              no-unused-vars
         7:1   warning  Expected @param names to be "foo". Got "fooo"                                                 jsdoc/check-param-names
        14:21  error    Use path.join() or path.resolve() instead of string concatenation                             node/no-path-concat
        17:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        21:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        25:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/output-all-files/index.ts
         3:1   error    Module imports itself                                                                         import/no-self-import
         3:8   error    'file' is defined but never used                                                              ts/no-unused-vars
         7:1   warning  @param "fooo" does not match an existing function parameter                                   jsdoc/check-param-names
        14:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2                                   promise/valid-params
        18:5   error    Prefer \`.textContent\` over \`.innerText\`                                                       unicorn/prefer-dom-node-text-content
        23:26  error    Detected potential trojan source attack with unicode bidi introduced in this code: ''user‮''  security/detect-bidi-characters

      /fixtures/output-all-files/markdown.md
         7:19  error  Unexpected string concatenation of literals              no-useless-concat
        11:34  error  The array literal notation [] is preferable              ts/no-array-constructor
        16:40  error  Extra semicolon                                          stylistic/semi
        22:13  error  Unexpected trailing comma                                jsonc/comma-dangle
        29:1   error  Empty mapping keys are forbidden                         yaml/no-empty-key
        37:1   error  '<script setup>' should be above '<template>' on line 1  vue/block-order

      ✖ 39 problems (35 errors, 4 warnings)
        6 errors and 0 warnings potentially fixable with the \`--fix\` option.

      "
    `)
  })
})
