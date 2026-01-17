import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"


export const ProvidersView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
	
		</div>
	`
})
