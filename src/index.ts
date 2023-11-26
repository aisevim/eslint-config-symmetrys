import { ignore, javascript, node, promise, stylistic, perfectionist } from "./configs"

const config: Promise<any>[] = []

config.push(
	ignore(),
	javascript(),
	node(),
	promise(),
	stylistic(),
	perfectionist(),
)

export default () => config
