import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { rimrafSync } from 'rimraf'
import { afterAll, describe, it } from 'vitest'

const dirname = process.cwd()

describe('Format', () => {
  afterAll(() => {
    rimrafSync(join(dirname, 'fixtures/**/*-tmp.*'), { glob: { dot: true } })
  })

  it('format files', async ({ expect }) => {
    const dir = join(dirname, 'fixtures/format')
    const config = join(dir, 'eslint.config.js')

    try {
      execSync(`eslint ${ dir } -c ${ config } --ignore-pattern='**/output/**' --fix-dry-run --format=./tests/utils/generate-formatted-tmp.js`)
    } catch {}

    const inSpecificReleaseIt = readFileSync(join(dir, '-tmp.release-it.json'), 'utf-8')
    expect(inSpecificReleaseIt).toMatchFileSnapshot(join(dir, 'output', '.release-it.json'))

    const inSpecificPackageJson = readFileSync(join(dir, 'package-tmp.json'), 'utf-8')
    expect(inSpecificPackageJson).toMatchFileSnapshot(join(dir, 'output', 'package.json'))

    const inSpecificTsConfig = readFileSync(join(dir, 'tsconfig-tmp.json'), 'utf-8')
    expect(inSpecificTsConfig).toMatchFileSnapshot(join(dir, 'output', 'tsconfig.json'))

    const inPerfectionistUnicorn = readFileSync(join(dir, 'index-tmp.js'), 'utf-8')
    expect(inPerfectionistUnicorn).toMatchFileSnapshot(join(dir, 'output', 'index.js'))

    const inYaml = readFileSync(join(dir, 'exampl-tmp.yaml'), 'utf-8')
    expect(inYaml).toMatchFileSnapshot(join(dir, 'output', 'exampl.yaml'))

    const inMarkdown = readFileSync(join(dir, 'markdown-tmp.md'), 'utf-8')
    expect(inMarkdown).toMatchFileSnapshot(join(dir, 'output', 'markdown.md'))

    const inVue = readFileSync(join(dir, 'App-tmp.vue'), 'utf-8')
    expect(inVue).toMatchFileSnapshot(join(dir, 'output', 'App.vue'))

    const inTs = readFileSync(join(dir, 'index-tmp.ts'), 'utf-8')
    expect(inTs).toMatchFileSnapshot(join(dir, 'output', 'index.ts'))

    const inStorybook = readFileSync(join(dir, 'Btn-tmp.stories.js'), 'utf-8')
    expect(inStorybook).toMatchFileSnapshot(join(dir, 'output', 'Btn.stories.js'))
  })
})
