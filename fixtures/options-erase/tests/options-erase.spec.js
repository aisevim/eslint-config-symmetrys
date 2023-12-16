import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

import { describe, it } from 'vitest'

const dir = resolve(dirname(new URL(import.meta.url).pathname), '..')

describe('options erase array and object', () => {
  it('erase rules, enable only 1 rule: detect-disable-mustache-escape', ({ expect }) => {
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

  it('catch only **/*.fake-yyy, files **/*.yaml are erased in eslint.config.js', ({ expect }) => {
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
