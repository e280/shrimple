import {html} from 'lit'
import {view} from '@e280/sly'

import styleCss from './style.css.js'
import themeCss from '../theme.css.js'

const QUOTES = [
	'everything should be make as shrimple as possible, but not shrimpler.',
]

export class ShrimpleApp extends view.component(use => {
	use.css(themeCss, styleCss)

	const quote = use.once(() =>
		QUOTES[Math.floor(Math.random() * QUOTES.length)]
	)

	const login = () => {
		// shrimple.loginPopup()
		console.log('login')
	}

	return html`
		<main class=page>

			<section class=hero>
				<img class=shrimp src="/assets/shrimp-hero.svg" alt="" />

				<h1>shrimple.io</h1>
				<h2>the shrimplest auth system on the web</h2>

				<p>
					A stupid-simple auth system for web apps.<br/>
					No passwords, no databases, no setup hell — just login and ship.
				</p>

				<button class=cta @click=${login}>
					Login to set up your app
				</button>

				<a class=docs href="https://github.com/e280/shrimple">
					View docs on GitHub →
				</a>

				<p class=quote>“${quote}”</p>
			</section>

		</main>
	`
}) {}
