import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

it('generate an error when tsconfig and eslint not syncronised + generate type-ts error', ({ expect }) => {
  let output

  try {
    output = execSync(`eslint .`, { encoding: 'utf-8', cwd: dir })
  } catch (error) {
    output = error.stdout.replaceAll(dir, '')
  }

  expect(output).toMatchInlineSnapshot(`
    "
    /src/ignored.ts
      0:0  error  Parsing error: ESLint was configured to run on \`<tsconfigRootDir>/src/ignored.ts\` using \`parserOptions.project\`: <tsconfigRootDir>/tsconfig.json
    However, that TSConfig does not include this file. Either:
    - Change ESLint's list of included files to not include this file
    - Change that TSConfig to include this file
    - Create a new TSConfig that includes this file and include it in your parserOptions.project
    See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file

    /src/index.ts
      8:15  error  Avoid referencing unbound methods which may cause unintentional scoping of \`this\`.
    If your function does not access \`this\`, you can annotate it with \`this: void\`, or consider using an arrow function instead  ts/unbound-method

    ✖ 2 problems (2 errors, 0 warnings)

    "
  `)
})
