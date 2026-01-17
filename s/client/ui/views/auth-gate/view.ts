import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

type AuthGateProps = {
	onLogin: () => void
}

export const AuthGateView = view(use => (props: AuthGateProps) => {
	use.css(themeCss, styleCss)

	const $email = use.signal("")
	const $password = use.signal("")

	const submit = (event: Event) => {
		event.preventDefault()
		props.onLogin()
	}

	const setEmail = (event: Event) => {
		const target = event.target as HTMLInputElement
		$email.value = target.value
	}

	const setPassword = (event: Event) => {
		const target = event.target as HTMLInputElement
		$password.value = target.value
	}

	return html`
		<div class="container">
		<section class="auth">
			<div class="card auth-card">
				<div class="auth-head">
					<span class="auth-emoji">🦐</span>
					<h1>Welcome back!</h1>
					<p x-muted>Sign in to manage your shrimple apps</p>
				</div>

				<form @submit=${submit} class="auth-form">
					<label class="field">
						<input
							type="email"
							x-input
							class="input"
							placeholder="Email"
							.value=${$email.value}
							@input=${setEmail}
						>
					</label>
					<label class="field">
						<input
							type="password"
							x-input
							class="input"
							placeholder="Password"
							.value=${$password.value}
							@input=${setPassword}
						>
					</label>
					<button
						x-button
						data-size="lg"
						type="submit"
					>
						Sign In
					</button>
				</form>

				<p class="small" x-muted>
					Don't have an account?
					<button
						class="link"
						type="button"
						@click=${props.onLogin}
					>
						Sign up for free
					</button>
				</p>
			</div>
		</section>
	
		</div>
	`
})
