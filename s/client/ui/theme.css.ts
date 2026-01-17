
import {dom} from "@e280/sly"
import {css, unsafeCSS} from "lit"

export default css`
	${unsafeCSS(
		dom.all("style[data-theme]")
			.map(s => s.innerHTML)
			.join("\n")
	)}
`

