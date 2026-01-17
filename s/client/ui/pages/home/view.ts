
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"

import {providers} from "./parts/providers.js"
import {stuff} from "../../../../tools/stuff.js"
import {PricingView} from "../../views/pricing/view.js"
import { consts } from "../../../../consts.js"

export const HomeView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<section class=title>
			<div>
				<img src="${stuff("shrimp.png")}" alt="" crossorigin="anonymous"/>
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
				<h3 class=chill>
					shrimplest login system for the web
				</h3>
			</div>

			<div class=actions>
				<a x-btn=subtle href="${consts.readme}">readme</a>
				<a x-btn href="#/apps">start right now</a>
			</div>
		</section>

		<section class=featurettes>
			<section class=philosophy>
				<span class=emoji>🐚</span>
				<h2>shrimple is so simple!</h2>
				<h3 class=chill>we're obsessed with shrimplicity</h3>

				<div class=box>
					<section>
						<h3><span>✓ </span> keep it shrimple, stupid</h3>
						<p>authentication, nothing else</p>
					</section>

					<section>
						<h3><span>✓ </span> open source</h3>
						<p>mit licensed</p>
					</section>

					<section>
						<h3><span>✓ </span> only works one way</h3>
						<p>the good way</p>
					</section>
				</div>
			</section>

			<section class="providers">
				<span class=emoji>🐠</span>
				<h2>shrimple providers</h2>
				<h3 class=chill>flip 'em on, flip 'em off</h3>

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

			<section class=quote>
				<video src="${stuff("ocean.mp4")}" crossorigin="anonymous" muted autoplay loop></video>
				<figure class=text>
					<blockquote>
						“everything should be made as shrimple as possible,
						<br/>
						but not shrimpler.”
					</blockquote>
					<figcaption>— albert einstein</figcaption>
				</figure>
				<figure class=portrait>
					<img src="${stuff("einstein.webp")}" alt="" crossorigin="anonymous"/>
				</figure>
			</section>

			${PricingView()}
		</section>
	`
})

