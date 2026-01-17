
import {html, ssg} from "@e280/scute"

export const featMindset = ssg.template(import.meta.url, async orb => html`
	<style>${orb.inject("style.css")}</style>

	<section class=feat-mindset>
		<div x-emoji>🐚</div>

		<h2 x-heading>
			<strong>obsessed with <em>shrimplicity</em></strong>
			<small>minimalist setup and config</small>
		</h2>

		<div class=box>
			<section>
				<h3><span>✓ </span> only works one way</h3>
				<p>the good way</p>
			</section>

			<section>
				<h3><span>✓ </span> keep it shrimple, stupid</h3>
				<p>authentication, nothing else</p>
			</section>

			<section>
				<h3><span>✓ </span> open source</h3>
				<p>mit licensed</p>
			</section>
		</div>
	</section>
`)

