
import {html, ssg} from "@e280/scute"
import {consts} from "../../../consts.js"
import {stuff} from "../../../tools/stuff.js"

export const featTitle = ssg.template(import.meta.url, async orb => html`
	<style>${orb.inject("style.css")}</style>

	<section class=feat-title>
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
`)

