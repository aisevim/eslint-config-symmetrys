import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

it('check config not enable when setted to false', ({ expect }) => {
  let output

  try {
    execSync(`eslint .`, { encoding: 'utf-8', cwd: dir })
  } catch (error) {
    output = error.stdout.replaceAll(dir, '')
  }

  expect(output).toMatchInlineSnapshot(`
    "
    /index.js
       3:1   error  Module imports itself                                              import/no-self-import
       3:8   error  'file' is defined but never used                                   no-unused-vars
      15:21  error  Use path.join() or path.resolve() instead of string concatenation  node/no-path-concat
      18:1   error  Promise.resolve() requires 0 or 1 arguments, but received 2        promise/valid-params
      22:5   error  Prefer \`.textContent\` over \`.innerText\`                            unicorn/prefer-dom-node-text-content

    ✖ 5 problems (5 errors, 0 warnings)

    "
  `)
})
