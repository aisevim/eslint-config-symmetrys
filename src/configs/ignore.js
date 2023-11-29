import { DEFAULT_IGNORES } from '../constants.js'

export async function ignore() {
	return {
		ignores: DEFAULT_IGNORES,
	}
}
