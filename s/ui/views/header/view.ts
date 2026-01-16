
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {stuffUrl} from "../../../tools/stuff-url.js"

export const HeaderView = view(use => () => {
	use.name("header")
	use.css(themeCss, styleCss)

	return html`
		<header>
			<nav>
				<a class="brand" href="#/">
					<img src="${stuffUrl("shrimp.png")}" alt="" crossorigin="anonymous"/>
				</a>
				<a href="#/">home</a>
				<a href="#/apps">apps</a>
			</nav>

			<button x-button>login</button>
		</header>
	`
})

