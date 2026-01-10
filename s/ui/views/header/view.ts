import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {sunIcon} from "./icons/sun.svg.js"
import {moonIcon} from "./icons/moon.svg.js"

const THEME_KEY = "shrimple-theme"

type Theme = "light" | "dark" | "system"

export const HeaderView = view(use => () => {
	use.css(themeCss, styleCss)

	const $theme = use.signal<Theme>("light")

	const applyTheme = (theme: Theme) => {
		const html = document.documentElement

		html.classList.remove('light', 'dark')

		if (theme === 'light' || theme === 'dark') {
			html.classList.add(theme)
		}
	}

	use.once(() => {
		// TODO - get initial user default color-scheme (light | dark)
		const stored = localStorage.getItem(THEME_KEY) as Theme | null

		if (stored === 'light' || stored === 'dark') {
			$theme.value = stored
			applyTheme(stored)
		} else {
			$theme.value = 'system'
			applyTheme('system')
		}
	})

	const toggleTheme = () => {
		const next =
			$theme.value === 'dark'
				? 'light'
				: 'dark'

		$theme.value = next

		localStorage.setItem(THEME_KEY, next)

		applyTheme(next)
	}

	return html`
		<div class="container">
		<header class="site-header">
			<div class="header-inner" x-content>
				<a class="brand" href="#/">
					<span class="brand-emoji" aria-hidden="true">🦐</span>
					<span class="brand-text">shrimple<span class="brand-dot">.io</span></span>
				</a>

				<nav class="nav">
					<a href="#/" class="nav-link">Home</a>
					<a href="#/apps" class="nav-link">Apps</a>
				</nav>

				<div class="actions">
					<button 
						class="theme-toggle"
						x-button
						data-ghost
						data-theme=${$theme.value}
						@click=${toggleTheme}
						aria-label="Toggle theme">
						${sunIcon}
						${moonIcon}
					</button>
					<button
						class="sign-in"
						x-button
						data-outline
						data-size="sm"
					>
						Sign In
					</button>
					<button
						x-button
						data-size="sm"
					>
						Get Started
					</button>
				</div>
			</div>
		</header>
	
		</div>
	`
})
