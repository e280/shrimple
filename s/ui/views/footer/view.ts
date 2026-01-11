import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

export const FooterView = view(use => () => {
	use.css(themeCss, styleCss)

	const year = new Date().getFullYear()

	return html`
		<div class="container">
		<footer class="site-footer">
			<div x-content>
				<div class="footer-top">
					<div class="brand">
						<div class="brand-row">
							<span class="emoji" aria-hidden="true">🦐</span>
							<span class="title">shrimple.io</span>
						</div>
						<p x-muted>The deadass shrimplest auth system, ever.</p>
					</div>

					<div class="links">
						<a href="#" x-muted>Docs</a>
						<a href="#" x-muted>GitHub</a>
						<a href="#" x-muted>Pricing</a>
						<a href="https://e280.org/" target="_blank" rel="noopener noreferrer" x-muted>e280.org</a>
					</div>
				</div>

				<div class="footer-bottom">
					<p x-muted>
						© ${year} shrimple.io — Built with 🦐 by
						<a href="https://e280.org/" target="_blank" rel="noopener noreferrer">e280</a>
					</p>
					<p x-muted>Reward us with GitHub stars ⭐</p>
				</div>
			</div>
		</footer>
	
		</div>
	`
})
