
import {dirname} from "path"
import {mkdir} from "fs/promises"
import SQLite from "better-sqlite3"
import {Kysely, SqliteDialect} from "kysely"

import {schema} from "./schema.js"
import {Database, Db} from "./types.js"

export async function sqliteFileDb(path: string): Promise<Db> {
	await mkdir(dirname(path), {recursive: true})
	return sqlite(path)
}

export async function sqliteMemoryDb(): Promise<Db> {
	return sqlite(":memory:")
}

async function sqlite(path: string) {
	const database = new SQLite(path)
	database.pragma("journal_mode = WAL")
	database.exec(schema)
	const dialect = new SqliteDialect({database})
	return new Kysely<Database>({dialect})
}

