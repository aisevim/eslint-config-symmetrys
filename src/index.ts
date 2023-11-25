import { ignore, javascript } from "./configs"

const config = []

config.push(
	ignore(),
	javascript()
)

export default () => config
