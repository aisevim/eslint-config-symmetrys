# eslint-config-symmetrys (in working progress)

## Usage
```js
// eslint.config.js
import symmetrys from 'eslint-config-symmetrys'

export default symmetrys()
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
		"json",
		"jsonc",
		"json5",
		"yaml",
		"yml"
	]
```
