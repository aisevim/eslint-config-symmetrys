import {
	ignore,
	javascript,
	node,
	promise,
	stylistic,
	perfectionist,
	unicorn,
	jsonc,
	exactPackageJson
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
	exactPackageJson()
)

export default () => config
