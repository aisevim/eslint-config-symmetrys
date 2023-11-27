import { ignore, javascript, node, promise, stylistic, perfectionist, unicorn, jsonc } from "./configs"

const config: Promise<any>[] = []

config.push(
	ignore(),
	javascript(),
	node(),
	promise(),
	stylistic(),
	perfectionist(),
	unicorn(),
	jsonc(),
)

export default () => config
