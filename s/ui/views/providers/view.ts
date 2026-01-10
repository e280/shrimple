import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {providers} from "./constants.js"


export const ProvidersView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
		<section class="providers">
			<div x-content>
				<h2>Auth providers 🐟</h2>
				<p class="subtitle" x-muted>Flip 'em on, flip 'em off. It's that shrimple.</p>

				<div class="provider-grid">
					${providers.map(provider => html`
						<div class="provider-card">
							<span class="provider-emoji">${provider.emoji}</span>
							<div class="provider-info">
								<div class="provider-title">
									<h3>${provider.name}</h3>
									${provider.free ? html`
										<span class="pill free">FREE</span>
									` : null}
								</div>
								<p x-muted>${provider.description}</p>
							</div>
							<div class="toggle">
								<span class="toggle-dot"></span>
							</div>
						</div>
					`)}
				</div>
			</div>
		</section>
	
		</div>
	`
})
