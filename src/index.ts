import { ignore, javascript, node, promise, stylistic, perfectionist, unicorn } from "./configs"

const config: Promise<any>[] = []

config.push(
	ignore(),
	javascript(),
	node(),
	promise(),
	stylistic(),
	perfectionist(),
	unicorn()
)

export default () => config
