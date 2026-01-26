
import {dirname} from "path"
import {mkdir} from "fs/promises"
import SQLite from "better-sqlite3"
import {Kysely, SqliteDialect} from "kysely"

import {Database, Db} from "./types.js"

export async function sqliteFileDb(path: string, schema: string): Promise<Db> {
	await mkdir(dirname(path), {recursive: true})
	return sqlite(path, schema)
}

export async function sqliteMemoryDb(schema: string): Promise<Db> {
	return sqlite(":memory:", schema)
}

async function sqlite(path: string, schema: string) {
	const database = new SQLite(path)
	database.pragma("journal_mode = WAL")
	database.exec(schema)
	const dialect = new SqliteDialect({database})
	return new Kysely<Database>({dialect})
}

