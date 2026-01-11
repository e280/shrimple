import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

export const NotFoundView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
		<section class="not-found">
			<div class="card">
				<h1>404</h1>
				<p x-muted>Oops! Page not found</p>
				<a href="#/" class="home-link">Return to Home</a>
			</div>
		</section>
	
		</div>
	`
})
