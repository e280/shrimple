
import {html} from "lit"

const noop = () => {}

export const NavButtons = (onSelect: () => void = noop) => html`
	<button
		class="sign-in"
		x-button
		data-outline
		data-size="sm"
		@click=${onSelect}
	>
		Sign In
	</button>
	<button
		x-button
		data-size="sm"
		@click=${onSelect}
	>
		Get Started
	</button>
`

export const NavLinks = (onSelect: () => void = noop) => html`
	<a href="#/" class="nav-link" @click=${onSelect}>Home</a>
	<a href="#/apps" class="nav-link" @click=${onSelect}>Apps</a>
`

