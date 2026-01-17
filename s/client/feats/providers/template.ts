
import {html, ssg} from "@e280/scute"
import {consts} from "../../../consts.js"

export const featProviders = ssg.template(import.meta.url, async orb => html`
	<style>${orb.inject("style.css")}</style>

	<section class=feat-providers>
		<div x-emoji>🐠</div>

		<h2 x-heading>
			<strong>shrimple providers</strong>
			<small>you'll just flick them on/off</small>
		</h2>

		<div class="provider-box">
			${consts.providers.map(provider => html`
				<div class="provider-card">
					<span class="provider-emoji">${provider.emoji}</span>
					<div class="provider-info">
						<div class="provider-title">
							<h3>${provider.name}</h3>
						</div>
						${provider.free
							? html`<span x-pill class="free">FREE</span>`
							: null}
						${provider.description && html`<small>${provider.description}</small>`}
					</div>
					<label class="toggle">
						<input type="checkbox" class="toggle-input">
						<span class="toggle-track">
							<span class="toggle-dot"></span>
						</span>
					</label>
				</div>
			`)}
		</div>
	</section>
`)

