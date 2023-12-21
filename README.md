# Symmetrys
[![Quality-Check](https://github.com/aisevim/eslint-config-symmetrys/workflows/Quality-Check/badge.svg)](https://github.com/aisevim/eslint-config-symmetrys)
[![NPM Badge](https://img.shields.io/npm/v/eslint-config-symmetrys?logo=npm)](https://www.npmjs.com/package/eslint-config-symmetrys)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-symmetrys)](https://github.com/aisevim/eslint-config-symmetrys)

`eslint-config-symmetrys` is a versatile and configurable ESLint preset designed for modern web development projects. It offers a comprehensive and customizable rule set, making it ideal for projects that require specific coding standards and practices. This preset enables easy integration and customization across a variety of development environments.


> [!IMPORTANT]
> This ESLint configuration is coded using the flat config format. For any modifications, please ensure to adhere to this format.
> 
> See [ESlint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)


## Configurations Overview

| Config name       | Prefix                      | Auto detection | Deactivable | Description                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | --------------------------- | -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `js`              | \-                          | \-             | no          | [ESLint configuration rules](https://eslint.org/docs/rules/) for JavaScript. Provides standard linting rules for JavaScript files, ensuring code quality and consistency.                                                                                                                                                                      |
| `ignore`          | \-                          | \-             | no          | \-                                                                                                                                                                                                                                                                                                                                             |
| `node`            | `node/`                     | \-             | no          | [Node Rules](https://github.com/eslint-community/eslint-plugin-n)                                                                                                                                                                                                                                                                              |
| `promise`         | `promise/`                  | \-             | no          | [Promise additional Rules.](https://github.com/xjamundx/eslint-plugin-promise)                                                                                                                                                                                                                                                                 |
| `perfectionist`   | `perfectionist/`            | \-             | no          | [Perfectionist Rules](https://eslint-plugin-perfectionist.azat.io/rules/)                                                                                                                                                                                                                                                                      |
| `unicorn`         | `unicorn/`                  | \-             | no          | [Unicorn Rules.](https://github.com/sindresorhus/eslint-plugin-unicorn) Implements advanced and specific coding standards to encourage the writing of clean and maintainable code.                                                                                                                                              |
| `eslint-comments` | `eslint-comments/`          | \-             | no          | [Eslint Comments Rules](https://mysticatea.github.io/eslint-plugin-eslint-comments/)                                                                                                                                                                                                                                                           |
| `imports`         | `import/`                   | \-             | no          | [Import Rules](https://github.com/un-es/eslint-plugin-i)                                                                                                                                                                                                                                                                                       |
| `ts`              | `ts/`                       | yes            | yes         | [TypeScript configuration rules.](https://typescript-eslint.io/rules/) Extends ESLint with TypeScript-specific rules, enhancing type safety and code standards in TypeScript projects. |
| `vue`             | `vue/`                      | yes            | yes         | [Vue.js specific rules.](https://eslint.vuejs.org/rules/) **Automatic set TypeScript support when enabled.**                                                                                                                                                                                                                                   |
| `vueA11y`         | `vue-a11y/`                 | yes with `vue` | yes         | [Vue A11y Rules.](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/rule-overview/) An eslint plugin for checking accessibility rules from within .vue files. **Available only when `vue` is enabled**                                                                                                                              |
| `vitest`          | `vitest/`, `no-only-tests/` | yes            | yes         | [Vitest Rules](https://github.com/veritem/eslint-plugin-vitest), [No only tests Rules](https://github.com/levibuzolic/eslint-plugin-no-only-tests)                                                                                                                                                                                             |
| `storybook`       | `storybook/`                | yes            | yes         | [Storybook Rules](https://github.com/storybookjs/eslint-plugin-storybook)                                                                                                                                                                                                                                                                      |
| `cypress`         | `cypress/`                  | yes            | yes         | [Cypress specific rules.](https://github.com/cypress-io/eslint-plugin-cypress)                                                                                                                                                                                                                                                                 |
| `markdown`        | `markdown/`                 | \-             | yes         | [Markdown Rules](https://github.com/eslint/eslint-plugin-markdown), Lint JavaScript, JSX, TypeScript, and more inside Markdown files.                                                                                                                                                                                                          |
| `security`        | `security/`                 | \-             | yes         | [Security-focused rules.](https://github.com/eslint-community/eslint-plugin-security) Enhances the security of the code by enforcing rules that prevent common security pitfalls.                                                                                                                                                              |
| `jsDoc`           | `jsdoc/`                    | \-             | yes         | [JSDoc linting rules.](https://github.com/gajus/eslint-plugin-jsdoc)                                                                                                                                                                                                                                                                           |
| `yaml`            | `yaml/`                     | \-             | yes         | [YAML Rules.](https://github.com/ota-meshi/eslint-plugin-yml) Applies linting rules to YAML files, ensuring correct syntax and structure.                                                                                                                                                                                                      |
| `json`            | `jsonc/`                    | \-             | yes         | [ESLint plugin for JSON, JSONC, JSON5](https://github.com/ota-meshi/eslint-plugin-jsonc)                                                                                                                                                                                                                                                       |
| `stylistic`       | `stylistic/`                | \-             | yes         | [Stylistic Rules](https://eslint.style/packages/default), focuses on code styling and formatting, ensuring a consistent code appearance.                                                                                                                                                                                                       |
| `gitignore`       | \-                          | \-             | yes         | Support for .gitignore in ESLint Flat Config. [See Github](https://github.com/antfu/eslint-config-flat-gitignore)                                                                                                                                                                                                                              |
| `specific`        | \-                          | \-             | yes         | **Not Configurable!** Sort specific files: `'**/tsconfig.json', '**/tsconfig.*.json'`, `**/package.json` and `**/.release-it.json`.                                                                                                                                                                                                            |

## Setup

### Installation
```sh
pnpm add eslint-config-symmetrys -D
or
npm i eslint-config-symmetrys -D
or
yarn add eslint-config-symmetrys --dev
```

### Usage

With `"type": "module"` in `package.json` (recommended):
```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

export default symmetrys()
```
With CJS:

```js
// eslint.config.js
const symmetrys = require('eslint-config-symmetrys').default

export default symmetrys()
```
> [!TIP]
> ESLint only detects `eslint.config.js` as the flat config entry, meaning you need to put `type: module` in your `package.json` or you have to use CJS in `eslint.config.js`. If you want explicit extension like `.mjs` or `.cjs`, or even `eslint.config.ts`, you can install [`eslint-ts-patch`](https://github.com/antfu/eslint-ts-patch) to fix it.

```jsonc
// package.json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### VSCode Config
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

## Configs

### Enable Config

All rules are enabled by default.

```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

// Enabled configs
export default symmetrys({
  jsDoc: true,
  ts: true,
  // vue: true || false // if vue existe in project
})
```

Disabled rules
```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

// Disable configs
export default symmetrys({
  ts: false,
  vitest: false,
  markdown: false,
  // vue: true || false // if vue existe in project
  // security: true,
  // jsDoc: true,

  // ...configurations can be enabled or disabled as needed
})
```

### Customize Config

```
const config = {
  merge: ...eslintFlatConfig,
  erase: ...eslintFlatConfig,
}
```

#### Merge Config
```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

export default symmetrys({
  vue: {
    merge: {
      rules: {
        // Default Vue rules...

        // Add custom rules for Vue configuration
        'vue/require-default-prop': 'error',
        'vue/define-macros-order': 'off',
      },
    },
  },
  yaml: {
    merge: {
      files: ['**/*.ymll'], // ['**/*.y?(a)ml', '**/*.ymll']
    },
  },
})
```

#### Erase Config
```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

export default symmetrys({
  vue: {
    erase: {
      rules: {
        // Removes all default Vue rules in the configuration

        // Add the first rule for Vue configuration
        'vue/require-default-prop': 'error',
      },
    },
  },
  yaml: {
    erase: {
      files: ['**/*.yml'], // ['**/*.yml']
    },
  },
})
```

### Setting Config

#### Add Config

```js
// eslint.config.js
import symmertry from 'eslint-config-symmetrys'
import eslintPluginRecommended from 'eslint-plugin-eslint-plugin/configs/recommended'

export default symmertry({
  settings: {
    addConfigs: [
      // Config 1
      eslintPluginRecommended,

      // Config 2
      {
        rules: {
          'eslint-plugin/test-case-shorthand-strings': 'error',
        },
      },
    ],
  },
})
```

## Acknowledgements

This project is inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

This project is licensed under the [MIT License](LICENSE).

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for details on each release.
