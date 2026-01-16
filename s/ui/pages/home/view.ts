
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"

import {providers} from "./parts/providers.js"
import {stuffUrl} from "../../../tools/stuff-url.js"
import {PricingView} from "../../views/pricing/view.js"

export const HomeView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<section class=title>
			<div>
				<img src="${stuffUrl("shrimp.png")}" alt="" crossorigin="anonymous"/>
				<h1>
					<span>shrimple</span><span>.io</span>
				</h1>
			</div>

			<div>
				<h2>
					<span>auth.</span>
					<span>easy.</span>
					<span>done.</span>
				</h2>
				<h3>
					shrimplest login system for the web
				</h3>
			</div>

			<div class=actions>
				<a x-btn=subtle href="https://github.com/e280/shrimple#readme">readme</a>
				<button x-btn>start right now</button>
			</div>
		</section>

		<section class=featurettes>
			<section class=quote>
				<video src="${stuffUrl("ocean.mp4")}" crossorigin="anonymous" muted autoplay loop></video>
				<figure class=text>
					<blockquote>
						“everything should be made as shrimple as possible,
						<br/>
						but not shrimpler.”
					</blockquote>
					<figcaption>— albert einstein</figcaption>
				</figure>
				<figure class=portrait>
					<img src="${stuffUrl("einstein.webp")}" alt="" crossorigin="anonymous"/>
				</figure>
			</section>

			<section class=philosophy>
				<div class=box>
					<section>
						<h3><span>✓ </span> keep it shrimple, stupid.</h3>
						<p>we authenticate logins, and do nothing else.</p>
					</section>

					<section>
						<h3><span>✓ </span> minimalist config.</h3>
						<p>we're obsessed with shrimplicity.</p>
					</section>

					<section>
						<h3><span>✓ </span> only works one way.</h3>
						<p>the good one.</p>
					</section>
				</div>
			</section>

			<section class="providers">
				<h2>🐟 shrimple providers</h2>
				<p class="subtitle" x-muted>flip 'em on, flip 'em off</p>

				<div class="provider-box">
					${providers.map(provider => html`
						<div class="provider-card">
							<span class="provider-emoji">${provider.emoji}</span>
							<div class="provider-info">
								<div class="provider-title">
									<h3>${provider.name}</h3>
									${provider.free ? html`
										<span x-pill class="free">FREE</span>
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
			</section>

			${PricingView()}
		</section>
	`
})

