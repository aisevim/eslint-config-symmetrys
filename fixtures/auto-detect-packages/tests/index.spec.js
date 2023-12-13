import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

it('run lint on vue and typescript files', ({ expect }) => {
  let output

  try {
    execSync(`eslint .`, { encoding: 'utf-8', cwd: dir })
  } catch (error) {
    output = error.stdout.replaceAll(dir, '')
  }

  expect(output).toMatchInlineSnapshot(`
    "
    /src/App.vue
      2:3   warning  Require self-closing on HTML elements (<div>)                         vue/html-self-closing
      3:3   warning  \`<template>\` require directive                                        vue/no-lone-template
      3:13  error    '<template>' cannot be keyed. Place the key on real elements instead  vue/no-template-key

    /src/index.ts
       3:1  error    Module imports itself                                        import/no-self-import
       3:8  error    'file' is defined but never used                             ts/no-unused-vars
       7:1  warning  @param "fooo" does not match an existing function parameter  jsdoc/check-param-names
      14:1  error    Promise.resolve() requires 0 or 1 arguments, but received 2  promise/valid-params
      18:5  error    Prefer \`.textContent\` over \`.innerText\`                      unicorn/prefer-dom-node-text-content

    ✖ 8 problems (5 errors, 3 warnings)
      0 errors and 1 warning potentially fixable with the \`--fix\` option.

    "
  `)
})
