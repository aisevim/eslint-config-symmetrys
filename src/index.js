import {
	ignore,
	javascript,
	node,
	promise,
	stylistic,
	perfectionist,
	unicorn,
	jsonc,
	vitest,
	yml,
	jsDoc,
	vue,
	comments,
	specialPackageJson,
	specialReleaseIt,
	specialTsConfig
} from "./configs"

const config = []

config.push(
	ignore(),
	javascript(),
	node(),
	promise(),
	stylistic(),
	perfectionist(),
	unicorn(),
	jsonc(),
	vitest(),
	yml(),
	jsDoc(),
	vue(),
	comments(),
	specialPackageJson(),
	specialReleaseIt(),
	specialTsConfig()
)

export default () => config
