import { ignore, javascript, node, promise, stylistic } from "./configs"

const config: Promise<any>[] = []

config.push(
	ignore(),
	javascript(),
	node(),
	promise(),
	stylistic(),
)

export default () => config
