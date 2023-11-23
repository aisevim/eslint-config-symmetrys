export default {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"plugin:@typescript-eslint/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: [
		"@typescript-eslint"
	],
	languageOptions: {
		globals: {
			...globals.browser
		}
	},
	ignores: [
		"**/node_modules/",
		".git/",
		"dist/",
		"build/",
		"coverage/",
		".vscode/",
		'**/__snapshots__',
		'**/.cache',
		'**/coverage',
		'**/temp',
		'**/.temp',
		'**/tmp',
		'**/.tmp',
		'**/output',
		'**/package-lock.json',
		'**/yarn.lock',
		'**/pnpm-lock.yaml',
	],
	rules: {}
}
