
import {Fns} from "@e280/renraku"
import {Hub} from "../hub.js"

export type Api = ReturnType<typeof makeApi>

export const makeApi = (hub: Hub) => ({
	async now() {
		return Date.now()
	},

	async add(a: number, b: number) {
		return a + b
	},
} satisfies Fns)

