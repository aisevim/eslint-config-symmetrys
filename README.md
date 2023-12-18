# Symmetrys
[![Tests](https://github.com/aisevim/eslint-config-symmetrys/workflows/Tests/badge.svg)](https://github.com/aisevim/eslint-config-symmetrys)
[![NPM Badge](https://img.shields.io/npm/v/eslint-config-symmetrys?logo=npm)](https://www.npmjs.com/package/eslint-config-symmetrys)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-symmetrys)](https://github.com/aisevim/eslint-config-symmetrys)

`eslint-config-symmetrys` is a versatile and configurable ESLint preset designed for modern web development projects. It offers a comprehensive and customizable rule set, making it ideal for projects that require specific coding standards and practices. This preset enables easy integration and customization across a variety of development environments.


> [!IMPORTANT]
> This ESLint configuration is coded using the flat config format. For any modifications, please ensure to adhere to this format.
> 
> See [ESlint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)


## Configurations Overview

| Config name     | Auto detection | Configurable | Activable/Deactivable                    | Prefix                         |
| --------------- | -------------- | ------------ | ---------------------------------------- | ------------------------------ |
| `js`            | -              | yes          | no                                       | -                              |
| `ignore`        | -              | yes          | no                                       | -                              |
| `node`          | -              | yes          | no                                       | `node/`                        |
| `promise`       | -              | yes          | no                                       | `promise/`                     |
| `perfectionist` | -              | yes          | no                                       | `perfectionist/`               |
| `unicorn`       | -              | yes          | no                                       | `unicorn/`                     |
| `comments`      | -              | yes          | no                                       | `comments/`                    |
| `imports`       | -              | yes          | no                                       | `import/`                      |
| `ts`            | yes            | yes          | yes                                      | `ts/`                          |
| `vue`           | yes            | yes          | yes                                      | `vue/`                         |
| `vueA11y`       | yes with `vue` | yes          | yes and auto disabled<br>if `vue: false` | `vue-a11y/`                    |
| `vitest`        | yes            | yes          | yes                                      | `vitest/`,<br>`no-only-tests/` |
| `storybook`     | yes            | yes          | yes                                      | `storybook/`                   |
| `markdown`      | -              | yes          | yes                                      | `markdown/`                    |
| `security`      | -              | yes          | yes                                      | `security/`                    |
| `jsDoc`         | -              | yes          | yes                                      | `jsdoc/`                       |
| `yaml`          | -              | yes          | yes                                      | `yaml/`                        |
| `json`          | -              | yes          | yes                                      | `jsonc/`                       |
| `stylistic`     | -              | yes          | yes                                      | `stylistic/`                   |
| `gitignore`     | -              | no           | yes                                      | -                              |
| `specific`      | -              | no           | yes                                      | -                              |



<details>
<summary>Configs Descriptions/Links</summary>

### ****Javascript****
[ESLint Rules](https://eslint.org/docs/rules/)

ESLint configuration rules for JavaScript. Provides standard linting rules for JavaScript files, ensuring code quality and consistency.

### ****Typescript****
[TypeScript Rules](https://typescript-eslint.io/rules/)

TypeScript configuration rules. Extends ESLint with TypeScript-specific rules, enhancing type safety and code standards in TypeScript projects.
**This project currently utilizes `eslint-recommended`, `rules` and `strict-type-checked` [More information about strict type checked](#typescript-1)**

### ****Vue****
[Vue Rules](https://eslint.vuejs.org/rules/)

Vue.js specific rules.
**Automatically sets TypeScript support when enabled.**
**This project currently utilizes `vue3-essential`, `vue3-strongly-recommended`, `vue3-recommended`**

### ****Vue A11y****
[Vue A11y Rules](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/rule-overview/)

An eslint plugin for checking accessibility rules from within .vue files.
**Available only when vue is enabled**

### ****Vitest****
[Vitest Rules](https://github.com/veritem/eslint-plugin-vitest)
[No only tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)

Vitest specific rules.

### ****Storybook****
[Storybook Rules](https://github.com/storybookjs/eslint-plugin-storybook)

Storybook specific rules.

### ****Node****
[Node Plugin](https://github.com/eslint-community/eslint-plugin-n)

Node.js additional ESLint Rules.

### ****Promise****
[Promise Rules](https://github.com/xjamundx/eslint-plugin-promise)

Promise additional ESLint Rules.

### ****Perfectionist****
[Perfectionist Rules](https://eslint-plugin-perfectionist.azat.io/rules/)

Perfectionist additional ESLint Rules.

### ****Unicorn****
[Unicorn Rules](https://github.com/sindresorhus/eslint-plugin-unicorn)

Unicorn rules. Implements advanced and specific coding standards to encourage the writing of clean and maintainable code.

### ****Comments****
[Comment Rules](https://mysticatea.github.io/eslint-plugin-eslint-comments/)

Additional rules Comments.

### ****Imports****
[Import Rules](https://github.com/un-es/eslint-plugin-i)

Additional rules for Imports.

### ****Markdown****
[Markdown Rules](https://github.com/eslint/eslint-plugin-markdown)

Lint JavaScript, JSX, TypeScript, and more inside Markdown files.

### ****Security****
[Security Rules](https://github.com/eslint-community/eslint-plugin-security)

Security-focused rules. Enhances the security of the code by enforcing rules that prevent common security pitfalls.

### ****Js Doc****
[JSDoc Rules](https://github.com/gajus/eslint-plugin-jsdoc)

JSDoc linting rules for ESLint.

### ****YAML****
[YAML Rules](https://github.com/ota-meshi/eslint-plugin-yml)

YAML configuration. Applies linting rules to YAML files, ensuring correct syntax and structure.

### ****JSON****
[JSONC Rules](https://github.com/ota-meshi/eslint-plugin-jsonc)

ESLint plugin for JSON(C|5)? files

### ****Stylistic Eslint****
[ESLint Stylistic Rules](https://eslint.style/packages/default)

Stylistic rules. Focuses on code styling and formatting, ensuring a consistent code appearance.

### ****GitIgnore Flat****

Support for .gitignore in ESLint Flat Config. [github](https://github.com/antfu/eslint-config-flat-gitignore)

### ****Specific****

Sort specific files: `'**/tsconfig.json', '**/tsconfig.*.json'`, `**/package.json` and `**/.release-it.json`.

</details>

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

```json
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

```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

// Customizable configurations
export default symmetrys({
  vue: {},
  ts: {},
  vitest: {},
  markdown: {},
  // ...configs can be customized as needed
})
```

### Merge Config
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

### Erase Config
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

#### Typescript

`strict-type-checking` rules are automatically set if `tsconfig.json` or `tsconfig.*.json` are found in racine of the project. The `tsconfig.json` file can be specified in the settings. [Typescript ESlint docs](https://typescript-eslint.io/linting/typed-linting#specifying-tsconfigs)

```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

export default symmetrys({
  settings: {
    tsproject: './tsconfig.json',
  },
})
```

Override the automatic rule assignment.

```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

export default symmetrys({
  ts: {
    merge: { // or erase
      languageOptions: {
        parserOptions: {
          project: true,
        },
      },
      rules: {
        // strict type-checking rules are not applied
      },
    },
  },
})
```

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
