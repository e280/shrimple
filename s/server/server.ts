
import * as http from "node:http"
import {makeRequestListener} from "@e280/renraku"

import {Hub} from "./hub.js"
import {env} from "./utils/env.js"
import {consts} from "../consts.js"
import {makeApi} from "./parts/api.js"
import {sqliteFileDb} from "./db/db.js"
import {setupHttp} from "./parts/http.js"
import {migrate} from "./utils/migrate.js"
import {dataPath} from "./utils/data-path.js"
import {readText} from "./utils/read-text.js"

await migrate({
	targetVersion: 1,
	versionPath: dataPath("version"),
	dataDirectory: env("SHRIMPLE_DATA"),
})

const port = Number(env("SHRIMPLE_PORT"))
const isDev = env("SHRIMPLE_DEV") === "yes"
const schema = await readText(consts.db.schemaPath)
const db = await sqliteFileDb(dataPath("db/sqlite"), schema)
const hub = new Hub(db)

const serveHttp = setupHttp(isDev)
const serveApi = makeRequestListener({rpc: async() => makeApi(hub)})

const server = new http.Server((request, response) => {
	if (request.url === "/api") serveApi(request, response)
	else serveHttp(request, response)
})

server.listen(port)
console.log(`🫡 serving on port ${port}`)

