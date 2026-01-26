
import {makeMock} from "@e280/renraku"
import {Science, test, expect} from "@e280/science"

import {Hub} from "./server/hub.js"
import {makeApi} from "./server/parts/api.js"
import {sqliteMemoryDb} from "./server/db/db.js"

await Science.run({
	"addition works": test(async() => {
		expect(2 + 2).is(4)
	}),

	"test": test(async() => {
		const db = await sqliteMemoryDb()
		const hub = new Hub(db)
		const api = makeMock({fns: makeApi(hub)})
		expect(await api.now()).ok()
	}),
})

