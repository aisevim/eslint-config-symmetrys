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
    "json",
    "json5",
    "jsonc",
    "markdown",
    "md",
    "mdown",
    "mkdn",
    "typescript",
    "typescriptreact",
    "vue",
    "yaml",
    "yml"
  ]
}
```
