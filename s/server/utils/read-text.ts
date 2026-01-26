
import {readFile, writeFile} from "node:fs/promises"

export async function readText(path: string) {
	return readFile(path, "utf8")
}

export async function writeText(path: string, text: string) {
	return writeFile(path, text, "utf8")
}

