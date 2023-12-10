import { execSync } from 'node:child_process'
import { join } from 'node:path'

import { describe, it } from 'vitest'

const dirname = process.cwd()

describe('Rules', () => {
  it('applied on default files, not vue, ts', ({ expect }) => {
    const target = join(dirname, 'fixtures/default')
    const config = join(dirname, 'fixtures/default/eslint.config.js')
    let output

    try {
      execSync(`eslint ${ target } -c ${ config }`, { encoding: 'utf-8' })
    } catch (error) {
      output = error.stdout
    }

    expect(output).toMatchSnapshot()
  })

  it('applied on vue, ts files', ({ expect }) => {
    const target = join(dirname, 'fixtures/vue-ts')
    const config = join(dirname, 'fixtures/vue-ts/eslint.config.js')
    let output

    try {
      execSync(`eslint ${ target } -c ${ config }`, { encoding: 'utf-8' })
    } catch (error) {
      output = error.stdout
    }

    expect(output).toMatchSnapshot()
  })
})
