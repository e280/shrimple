import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

import type {AppData, ProviderKey} from "../../pages/apps/types.js"
import {codeExamples, providers, setupSteps} from "./constants.js"

type AppDetailsProps = {
	app: AppData
	onUpdateApp: (app: AppData) => void
}

export const AppDetailsView = view(use => (props: AppDetailsProps) => {
	use.css(themeCss, styleCss)

	const $activeStep = use.signal(1)
	const snippets = codeExamples(props.app.appId)

	const changeAppName = (event: Event) => {
		const target = event.target as HTMLInputElement
		props.onUpdateApp({ ...props.app, name: target.value })
	}

	const toggleAuthProvider = (provider: {key: ProviderKey}) => {
		props.onUpdateApp({
			...props.app,
			providers: {
				...props.app.providers,
				[provider.key]: !props.app.providers[provider.key],
			},
		})
	}

	const changeAllowedOrigins = (event: Event) => {
		const target = event.target as HTMLInputElement
		props.onUpdateApp({...props.app, origins: target.value})
	}

	return html`
		<div class="container">
		<main class="details">
			<div class="details-inner">
				<div class="field-group">
					<label class="label" for="app-name">App Name</label>
					<input
						id="app-name"
						x-input
						class="input name"
						.value=${props.app.name}
						@input=${changeAppName}>
				</div>

				<div class="field-group">
					<label class="label" for="app-id">App ID</label>
					<input id="app-id" x-input class="input code" .value=${props.app.appId} readonly />
				</div>

				<div class="field-group">
					<label class="label" for="origins">Allowed Origins</label>
					<input
						id="origins"
						x-input
						class="input"
						.placeholder="https://example.com, http://localhost:3000"
						.value=${props.app.origins}
						@input=${changeAllowedOrigins}>
				</div>

				<div class="provider-block">
					<label class="label">Auth Providers</label>
					<div class="provider-grid">
						${providers.map(provider => html`
							<div class="provider-card">
								<span class="provider-label">
									<span>${provider.emoji}</span>
									${provider.label}
								</span>
								<button
									class="switch"
									?data-on=${props.app.providers[provider.key]}
									@click=${toggleAuthProvider}
								>
									<span class="switch-thumb"></span>
								</button>
							</div>
						`)}
					</div>
				</div>

				<div class="steps">
					<label class="label">Quick Start</label>
					<div class="step-grid">
						${setupSteps.map(step => html`
							<button
								class="step"
								?data-active=${$activeStep.value === step.num}
								@click=${() => $activeStep.value = step.num}
							>
								<span class="step-num">${step.num}</span>
								<span class="step-title">${step.title}</span>
								<span class="step-desc">${step.desc}</span>
							</button>
						`)}
					</div>
				</div>

				<div class="code-block">
					<pre><code>${snippets[$activeStep.value as keyof typeof snippets]}</code></pre>
				</div>
			</div>
		</main>
	
		</div>
	`
})
