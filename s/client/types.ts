
import {Html, html} from "@e280/scute"

export const asFeat = (f: Feat) => () => html`
	<style>${f.css}</style>
	${f.html}
`

export type Feat = {
	html: Html
	css: Html
}

