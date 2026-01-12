
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {HamburgerBtn} from "./renderers/hamburger-btn.js"
import {Theme, ThemeToggle} from "./renderers/theme-toggle.js"
import {NavButtons, NavLinks} from "./renderers/nav-buttons.js"

const THEME_KEY = "shrimple-theme"

export const HeaderView = view(use => () => {
	use.css(themeCss, styleCss)

	const $theme = use.signal<Theme>("light")
	const $menuOpen = use.signal(false)

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

	const toggleMenuOpen = () => $menuOpen.value = !$menuOpen.value

	return html`
		<div class="container">
		<header class="site-header">
			<div class="header-inner" x-content>
				<a class="brand" href="#/">
					<span class="brand-emoji" aria-hidden="true">🦐</span>
					<span class="brand-text">shrimple<span class="brand-dot">.io</span></span>
				</a>

				<nav class="nav">
					${NavLinks()}
				</nav>

				<div class="actions">
					${ThemeToggle($theme.value, toggleTheme)}
					${NavButtons()}
				</div>

				<div class="mobile-actions">
					${ThemeToggle($theme.value, toggleTheme)}
					${HamburgerBtn({
						toggle: toggleMenuOpen,
						isOpen: $menuOpen.value
					})}
				</div>
			</div>
		</header>

		<div id="mobile-menu" class="mobile-menu" ?data-open=${$menuOpen.value}>
			<button class="menu-backdrop" @click=${toggleMenuOpen} aria-hidden="true"></button>
			<div class="menu-panel">
				<nav class="menu-nav">
					${NavLinks(toggleMenuOpen)}
				</nav>
				<div class="menu-actions">
					${NavButtons(toggleMenuOpen)}
				</div>
			</div>
		</div>
	
		</div>
	`
})

