
import {rm, mkdir} from "node:fs/promises"
import {readText, writeText} from "./read-text.js"

export async function migrate(o: {
		targetVersion: number
		versionPath: string
		dataDirectory: string
	}) {

	const storedVersion = await getVersion(o.versionPath)

	if (storedVersion !== o.targetVersion) {
		console.log(`🔥 migrating data from v${storedVersion} to v${o.targetVersion}`)
		await nuke(o.dataDirectory)
	}

	await writeText(o.versionPath, o.targetVersion.toString())
}

async function getVersion(p: string) {
	const text = await readText(p).catch(() => undefined)
	return text
		? Number(text)
		: 0
}

async function nuke(directory: string) {
	await rm(directory, {recursive: true, force: true})
	await mkdir(directory, {recursive: true})
}

