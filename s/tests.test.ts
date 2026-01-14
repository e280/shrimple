
import {Science, test, expect} from "@e280/science"
import {sqliteMemoryDb} from "./server/db/db.js"

await Science.run({
	"addition works": test(async() => {
		expect(2 + 2).is(4)
	}),

	"test": test(async() => {
		const db = sqliteMemoryDb()
		expect(db).ok()
	}),
})

