import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { rimrafSync } from 'rimraf'
import { afterAll, describe, it } from 'vitest'

const dirname = process.cwd()

describe('settings `strictFormat`', () => {
  afterAll(() => {
    rimrafSync(join(dirname, 'fixtures/**/*-tmp.*'), { glob: { dot: true } })
  })

  describe('Configure Strict Format for specific files', () => {
    it('Should apply strict format only on specified files in eslint.config.js', async ({ expect }) => {
      const dir = join(dirname, 'fixtures/setting-strict-format')
      const config = join(dir, 'eslint.config.js')

      try {
        execSync(`eslint ${ dir } -c ${ config } --ignore-pattern='**/output/**' --fix-dry-run --format=./tests/utils/generate-formatted-tmp.js`)
      } catch {}

      const inStrictJSON = readFileSync(join(dir, 'strict-tmp.json'), 'utf-8')
      expect(inStrictJSON).toMatchFileSnapshot(join(dir, 'output', 'strict.json'))

      const inNotStrictJSON = readFileSync(join(dir, 'not-strict-tmp.json'), 'utf-8')
      expect(inNotStrictJSON).toMatchFileSnapshot(join(dir, 'output', 'not-strict.json'))

      const inStrictJSScript = readFileSync(join(dir, 'strict-tmp.js'), 'utf-8')
      expect(inStrictJSScript).toMatchFileSnapshot(join(dir, 'output', 'strict.js'))

      const inNotStrictJSScript = readFileSync(join(dir, 'not-strict-tmp.js'), 'utf-8')
      expect(inNotStrictJSScript).toMatchFileSnapshot(join(dir, 'output', 'not-strict.js'))

      const inStrictTSScript = readFileSync(join(dir, 'strict-tmp.ts'), 'utf-8')
      expect(inStrictTSScript).toMatchFileSnapshot(join(dir, 'output', 'strict.ts'))

      const inNotStrictTSScript = readFileSync(join(dir, 'not-strict-tmp.ts'), 'utf-8')
      expect(inNotStrictTSScript).toMatchFileSnapshot(join(dir, 'output', 'not-strict.ts'))
    })
  })
})
