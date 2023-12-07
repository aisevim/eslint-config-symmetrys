# eslint-config-symmetry

## Usage
```js
// eslint.config.js
import symmetry from 'eslint-config-symmetry'

export default symmetry()
```

## Vscode Config
```json
	"eslint.experimental.useFlatConfig": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit",
		"source.organizeImports": "never"
	},
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact",
		"vue",
		"html",
		"markdown",
		"json",
		"jsonc",
		"json5",
		"yaml",
		"yml"
	]
```
