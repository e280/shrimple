
import {html, ssg} from "@e280/scute"
import {consts} from "../../../consts.js"

export const featPricing = ssg.template(import.meta.url, async orb => html`
	<style>${orb.inject("style.css")}</style>

	<section class=feat-pricing>
		<div x-emoji>🐡</div>

		<h2 x-heading>
			<strong>insanely <em>cheap</em></strong>
			<small>we totally didn't just make up these numbers just now</small>
		</h2>

		<div class="tier-grid">
			${consts.tiers.map(tier => html`
				<div class="tier-card">
					${tier.highlight
						? html`<div x-pill class=tier-badge data-highlight="${tier.highlight}">${tier.highlight}</div>`
						: null
					}

					<div class="tier-emoji">${tier.emoji}</div>

					<h3>${tier.name}</h3>

					<div class="tier-price">
						<span class="price">${tier.price}</span>
						<span class="period" x-muted>${tier.period}</span>
					</div>

					<ul>
						${tier.features.map(feature => html`
							<li><span class="check">✓</span>${feature}</li>
						`)}
					</ul>

					<button x-button>
						choose
					</button>
				</div>
			`)}
		</div>
	</section>
`)

