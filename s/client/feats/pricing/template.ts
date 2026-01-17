
import {html, ssg} from "@e280/scute"
import {consts} from "../../../consts.js"

export const featPricing = ssg.template(import.meta.url, async orb => html`
	<style>${orb.inject("style.css")}</style>

	<section class=feat-pricing>
		<div class=emoji>🐡</div>

		<h2>stupidly cheap pricing</h2>
		<p class="subtitle" x-muted>We totally didn't just make up these numbers just now.</p>

		<div class="tier-grid">
			${consts.tiers.map(tier => html`
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
	</section>
`)

