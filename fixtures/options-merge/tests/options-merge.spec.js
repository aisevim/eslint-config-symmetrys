import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { describe, it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

describe('options merge rules', () => {
  it('d\'ont catch security-rules-not.js when the only rules is erased by configuration in eslint.config.js', ({ expect }) => {
    let output
  
    try {
      execSync(`eslint **/security-rules*.js`, { encoding: 'utf-8', cwd: dir })
    } catch (error) {
      output = error.stdout.replaceAll(dir, '')
    }
  
    expect(output).toMatchInlineSnapshot(`
      "
      /security-rules.js
        9:1  error  Markup escaping disabled  security/detect-disable-mustache-escape

      ✖ 1 problem (1 error, 0 warnings)

      "
    `)
  })
})

describe('options merge files', () => {
  it('catch **/*.fake-yyy too, when the files in eslint.config.js is updated for yaml config', ({ expect }) => {
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

      /yaml-config.yaml
        3:1  error  Empty mapping keys are forbidden  yaml/no-empty-key

      ✖ 2 problems (2 errors, 0 warnings)

      "
    `)
  })
})
