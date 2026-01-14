import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

export const HeroView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
		<section class="hero">
			<div class=shadow>
				<video src="/assets/ocean.mp4" muted autoplay loop></video>
			</div>
			<div class="hero-bg" aria-hidden="true">
				<span class="float shrimp">🦐</span>
				<span class="float shrimp-alt">🍤</span>
				<span class="float crab">🦀</span>
				<span class="float lobster">🦞</span>
			</div>

			<div class="hero-inner" x-content>
				<div class="hero-brand">
					<span class="hero-emoji">🦐</span>
					<h1>shrimple<span class="accent">.io</span></h1>
				</div>

				<blockquote>
					"everything should be made as shrimple as possible, but not shrimpler."
					<footer>— albert einstein</footer>
				</blockquote>

				<p class="tagline">the deadass shrimplest auth system, ever.</p>

				<div class="hero-points">
					<span><span class="check">✓</span> keep it shrimple, stupid</span>
					<span><span class="check">✓</span> minimalist config</span>
					<span><span class="check">✓</span> one way only — the good one</span>
				</div>

				<div class="hero-actions">
					<button x-button data-size="lg">Get Started Free 🦐</button>
					<button x-button data-outline data-size="lg">View Docs →</button>
				</div>

				<p class="hero-proof" x-muted>Trusted by developers who appreciate shrimplicity ✨</p>
			</div>
		</section>
	
		</div>
	`
})
