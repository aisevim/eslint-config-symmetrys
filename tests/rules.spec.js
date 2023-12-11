import { execSync } from 'node:child_process'
import { join } from 'node:path'

import { describe, it } from 'vitest'

const dirname = process.cwd()

describe('Rules', () => {
  it('applied on default files, not vue, ts', ({ expect }) => {
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
      /fixtures/default/exampl.yaml
        3:1  error  Empty mapping keys are forbidden  yaml/no-empty-key

      /fixtures/default/example.json
        3:3  error  Duplicate key 'a'  jsonc/no-dupe-keys

      /fixtures/default/index.js
         3:1   error    Module imports itself                                              import/no-self-import
         3:8   error    'file' is defined but never used                                   no-unused-vars
         7:1   warning  Expected @param names to be "foo". Got "fooo"                      jsdoc/check-param-names
        14:21  error    Use path.join() or path.resolve() instead of string concatenation  node/no-path-concat
        17:1   error    Promise.resolve() requires 0 or 1 arguments, but received 2        promise/valid-params
        21:5   error    Prefer \`.textContent\` over \`.innerText\`                            unicorn/prefer-dom-node-text-content

      ✖ 8 problems (7 errors, 1 warning)

      "
    `)
  })

  it('applied on vue, ts files', ({ expect }) => {
    const target = join(dirname, 'fixtures/vue-ts')
    const config = join(dirname, 'fixtures/vue-ts/eslint.config.js')
    let output

    try {
      execSync(`eslint ${ target } -c ${ config }`, { encoding: 'utf-8' })
    } catch (error) {
      output = error.stdout.replaceAll(dirname, '')
    }

    expect(output).toMatchInlineSnapshot(`
      "
      /fixtures/vue-ts/App.vue
        3:3   warning  \`<template>\` require directive                                        vue/no-lone-template
        3:13  error    '<template>' cannot be keyed. Place the key on real elements instead  vue/no-template-key

      /fixtures/vue-ts/index.ts
         3:1  error    Module imports itself                                        import/no-self-import
         3:8  error    'file' is defined but never used                             @typescript-eslint/no-unused-vars
         7:1  warning  @param "fooo" does not match an existing function parameter  jsdoc/check-param-names
        14:1  error    Promise.resolve() requires 0 or 1 arguments, but received 2  promise/valid-params
        18:5  error    Prefer \`.textContent\` over \`.innerText\`                      unicorn/prefer-dom-node-text-content

      ✖ 7 problems (5 errors, 2 warnings)

      "
    `)
  })
})
