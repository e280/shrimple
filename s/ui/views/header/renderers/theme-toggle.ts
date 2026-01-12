
import {html} from "lit"
import {moonIcon} from "../icons/moon.svg.js"
import {sunIcon} from "../icons/sun.svg.js"

export type Theme = "light" | "dark" | "system"

export const ThemeToggle = (theme: Theme, toggleTheme: () => void) => html`
	<button 
		class="theme-toggle"
		x-button
		data-ghost
		data-theme=${theme}
		@click=${toggleTheme}
		aria-label="Toggle theme"
	>
		${sunIcon}
		${moonIcon}
	</button>
`

