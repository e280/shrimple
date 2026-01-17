
import {html, ssg} from "@e280/scute"
import {stuff} from "../../../tools/stuff.js"

export const featQuote = ssg.template(import.meta.url, async orb => html`
	<style>${orb.inject("style.css")}</style>

	<section class=feat-quote>
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
`)

