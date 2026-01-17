
import {html, ssg} from "@e280/scute"

export const featMindset = ssg.template(import.meta.url, async orb => html`
	<style>${orb.inject("style.css")}</style>

	<section class=feat-mindset>
		<div class=emoji>🐚</div>

		<h2>shrimple is simple</h2>
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
`)

