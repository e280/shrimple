
import {Db} from "../types.js"

export async function db_count_users(db: Db) {
	const {count} = await db
		.selectFrom("users")
		.select(db.fn.countAll().as("count"))
		.executeTakeFirstOrThrow()

	return Number(count)
}

