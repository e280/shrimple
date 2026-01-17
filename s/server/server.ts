
import * as http from "http"
import {env} from "./utils/env.js"
import {makeApi} from "./parts/api.js"
import {sqliteFileDb} from "./db/db.js"
import {setupHttp} from "./parts/http.js"
import {makeRequestListener} from "@e280/renraku"

const port = Number(env("SHRIMPLE_PORT"))
const db = await sqliteFileDb(env("SHRIMPLE_DB"))
const serveHttp = setupHttp(env("SHRIMPLE_DEV") === "yes")
const serveApi = makeRequestListener({rpc: async() => makeApi(db)})

const server = new http.Server((request, response) => {
	if (request.url === "/api") serveApi(request, response)
	else serveHttp(request, response)
})

server.listen(port)
console.log(`🫡 serving on port ${port}`)

