import {html} from "lit"

import {hamburger} from "../icons/hamburger.svg.js"

interface HamburgerBtnProps {
	toggle: () => void
	isOpen: boolean
}

export const HamburgerBtn = (props: HamburgerBtnProps) => html`
	<button
		class="menu-toggle"
		x-button
		data-ghost
		data-size="sm"
		@click=${props.toggle}
		aria-label="Toggle menu"
		aria-expanded=${props.isOpen}
		aria-controls="mobile-menu"
	>
		${hamburger}
	</button>
`
