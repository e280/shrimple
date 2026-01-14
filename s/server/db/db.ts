
import SQLite from "better-sqlite3"
import {Kysely, SqliteDialect} from "kysely"
import {schema} from "./schema.js"
import {Database, Db} from "./types.js"

export function sqliteFileDb(dirpath: string): Db {
	const database = new SQLite(dirpath)
	database.pragma("journal_mode = WAL")
	database.exec(schema)
	const dialect = new SqliteDialect({database})
	return new Kysely<Database>({dialect})
}

export function sqliteMemoryDb(): Db {
	const database = new SQLite(":memory:")
	database.pragma("journal_mode = WAL")
	database.exec(schema)
	const dialect = new SqliteDialect({database})
	return new Kysely<Database>({dialect})
}

