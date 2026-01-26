
import * as path from "node:path"
import {env} from "./env.js"

export function dataPath(p: string) {
	return path.join(env("SHRIMPLE_DATA"), p)
}

