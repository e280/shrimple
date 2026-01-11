import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {features} from "./constants.js"
import themeCss from "../../theme.css.js"


export const FeaturesView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
		<section class="features">
			<div x-content>
				<h2>Why shrimple? 🍤</h2>
				<p class="subtitle" x-muted>Because authentication shouldn't require a PhD or a 200-page manual.</p>

				<div class="feature-grid">
					${features.map(feature => html`
						<div class="feature-card">
							<div class="emoji">${feature.emoji}</div>
							<h3>${feature.title}</h3>
							<p x-muted>${feature.description}</p>
						</div>
					`)}
				</div>
			</div>
		</section>
	
		</div>
	`
})
