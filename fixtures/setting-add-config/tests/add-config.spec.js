import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { describe, it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

describe.concurrent('Add new configs to the end of config array (higher priority), see `./setting-add-config/eslint.config.js` for customisation details', () => {
  it.concurrent('Should add 2 configs, and generate 1 error by configs', ({ expect }) => {
    let output

    try {
      output = execSync(`eslint .`, { encoding: 'utf-8', cwd: dir })
    } catch (error) {
      output = error.stdout.replaceAll(dir, '')
    }

    expect(output).toMatchInlineSnapshot(`
      "
      /src/rules.js
         9:28  error  Use \`output: null\` to assert that a test case is not autofixed  eslint-plugin/prefer-output-null
        17:5   error  Use a string for this test case instead of an object            eslint-plugin/test-case-shorthand-strings

      ✖ 2 problems (2 errors, 0 warnings)
        2 errors and 0 warnings potentially fixable with the \`--fix\` option.

      "
    `)
  })
})
