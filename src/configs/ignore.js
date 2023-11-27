export async function ignore() {
	return {
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
	}
}
