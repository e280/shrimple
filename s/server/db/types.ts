
import {Kysely} from "kysely"

export type Id = string
export type Db = Kysely<Database>

export interface Database {
	users: {
		id: Id
	}

	providerAuthlocal: {
		id: Id
		userId: Id
	}

	providerGoogle: {
		id: Id
		userId: Id
	}

	apps: {
		id: Id
		userId: Id
		name: string
		origins: string // comma-separated origins
		providers: string // comma-separated provider names "authlocal,google"
	}

	eventLogin: {
		id: Id
		time: number
		provider: "authlocal" | "google"
		providerId: Id
	}
}

