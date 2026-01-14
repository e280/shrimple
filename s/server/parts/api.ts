
import {Fns} from "@e280/renraku"
import {Db} from "../db/types.js"

export type Api = ReturnType<typeof makeApi>

export const makeApi = (db: Db) => ({
	async now() {
		return Date.now()
	},

	async add(a: number, b: number) {
		return a + b
	},
} satisfies Fns)

