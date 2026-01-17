
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {context} from "../../context.js"
import themeCss from "../../theme.css.js"
import {stuff} from "../../../../tools/stuff.js"

export class ShrimpleHeader extends view.component(use => {
	use.name("header")
	use.css(themeCss, styleCss)

	const {router} = context

	return html`
		<header>
			<nav>
				<a class="brand" href="${router.nav.home.hash()}">
					<img src="${stuff("shrimp.png")}" alt="" crossorigin="anonymous"/>
				</a>
				<a href="${router.nav.home.hash()}" ?data-active="${router.nav.home.active}">home</a>
				<a href="${router.nav.apps.hash()}" ?data-active="${router.nav.apps.active}">apps</a>
			</nav>

			<button x-btn class=login>login</button>
		</header>
	`
}) {}

