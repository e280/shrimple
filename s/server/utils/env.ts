
import {is} from "@e280/stz"

export const env = (name: string) => {
	const value = process.env[name]

	if (is.sad(value))
		throw new Error(`required env "${name}" not supplied`)

	return value
}

