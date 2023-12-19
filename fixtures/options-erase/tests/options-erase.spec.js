import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { describe, it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

describe.concurrent('Erase part of the default config, see `./options-erase/eslint.config.js` for customisation details', () => {
  it.concurrent('Should erase security config rules, added 1 rules who need to be catched in output', ({ expect }) => {
    let output

    try {
      execSync(`eslint **/security-rules*.js`, { encoding: 'utf-8', cwd: dir })
    } catch (error) {
      output = error.stdout.replaceAll(dir, '')
    }

    expect(output).toMatchInlineSnapshot(`
      "
      /security-rules.js
        10:1  error  Markup escaping disabled  security/detect-disable-mustache-escape

      ✖ 1 problem (1 error, 0 warnings)

      "
    `)
  })

  it.concurrent('Should erase yaml config files, catch yaml errors in another type of file', ({ expect }) => {
    let output

    try {
      execSync(`eslint **/yaml-config.*`, { encoding: 'utf-8', cwd: dir })
    } catch (error) {
      output = error.stdout.replaceAll(dir, '')
    }

    expect(output).toMatchInlineSnapshot(`
      "
      /yaml-config.fake-yyy
        3:1  error  Empty mapping keys are forbidden  yaml/no-empty-key

      ✖ 1 problem (1 error, 0 warnings)

      "
    `)
  })
})
