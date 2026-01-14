
import * as http from "http"
import sirv from "sirv"

const serveStatic = sirv("x", {
	dev: process.env.NODE_ENV !== "production",
	etag: true,
	single: true,
})

export function serveHttp(
		request: http.IncomingMessage,
		response: http.ServerResponse,
	) {
	serveStatic(request, response)
}

