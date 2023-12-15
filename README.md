# eslint-config-symmetrys (in working progress)

## Usage
```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

export default symmetrys()
```

## Vscode Config
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
    "json",
    "json5",
    "jsonc",
    "md",
    "mkdn",
    "mdown",
    "markdown",
    "yaml",
    "yml",
    "vue"
  ]
}
```
