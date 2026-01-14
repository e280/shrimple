
import * as http from "http"
import {env} from "../tools/env.js"
import {sqliteFileDb} from "./db/db.js"
import {serveApi} from "./serve/api.js"
import {serveHttp} from "./serve/http.js"

const port = Number(env("SHRIMPLE_PORT"))
const db = sqliteFileDb(env("SHRIMPLE_DB"))

const server = new http.Server((request, response) => {
	if (request.url === "/api") serveApi(db, request, response)
	else serveHttp(request, response)
})

server.listen(port)
console.log(`🫡 serving on port ${port}`)

