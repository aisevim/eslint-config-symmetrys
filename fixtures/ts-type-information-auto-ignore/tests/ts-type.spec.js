import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { describe } from 'node:test'
import { it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

describe('set type information on typescript with setting tsproject', () => {
  it('generate an error when tsconfig and eslint not syncronised + don\'t set automaticly set strict-type-checked rules', ({ expect }) => {
    let output

    try {
      output = execSync(`eslint .`, { encoding: 'utf-8', cwd: dir })
    } catch (error) {
      output = error.stdout.replaceAll(dir, '')
    }

    expect(output).toMatchInlineSnapshot(`
      "
      /src/App-ts.vue
        0:0  error  Parsing error: ESLint was configured to run on \`<tsconfigRootDir>/src/App-ts.vue\` using \`parserOptions.project\`: <tsconfigRootDir>/tsconfigNotFinded.json
      However, that TSConfig does not include this file. Either:
      - Change ESLint's list of included files to not include this file
      - Change that TSConfig to include this file
      - Create a new TSConfig that includes this file and include it in your parserOptions.project
      See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file

      /src/ignored.ts
        0:0  error  Parsing error: ESLint was configured to run on \`<tsconfigRootDir>/src/ignored.ts\` using \`parserOptions.project\`: <tsconfigRootDir>/tsconfigNotFinded.json
      However, that TSConfig does not include this file. Either:
      - Change ESLint's list of included files to not include this file
      - Change that TSConfig to include this file
      - Create a new TSConfig that includes this file and include it in your parserOptions.project
      See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file

      ✖ 2 problems (2 errors, 0 warnings)

      "
    `)
  })
})
