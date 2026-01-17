import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"
import {tiers} from "./constants.js"

export const PricingView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
		<section class="pricing">
			<div x-content>
				<h2>🐡 stupidly cheap pricing</h2>
				<p class="subtitle" x-muted>We totally didn't just make up these numbers just now.</p>
				<p class="fine" x-muted>(okay maybe we did, but they're still pretty good)</p>

				<div class="tier-grid">
					${tiers.map(tier => html`
						<div class="tier-card" ?data-popular=${tier.popular}>
							${tier.highlight
								? html`<div class="tier-badge ${tier.color}">${tier.highlight}</div>`
								: null
							}
							<div class="tier-emoji">${tier.emoji}</div>
							<h3>${tier.name}</h3>
							<div class="tier-price">
								<span class="price">${tier.price}</span>
								<span class="period" x-muted>${tier.period}</span>
							</div>
							<p class="tier-desc" x-muted>${tier.description}</p>
							<ul>
								${tier.features.map(feature => html`
									<li><span class="check">✓</span>${feature}</li>
								`)}
							</ul>
						<button x-button ?data-outline=${!tier.popular}>
							${tier.price === "$0" ? "Start Free" : "Get Started"}
						</button>
						</div>
					`)}
				</div>
			</div>
		</section>
	
		</div>
	`
})
