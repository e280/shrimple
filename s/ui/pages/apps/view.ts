import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

import {HeaderView} from "../../views/header/view.js"
import {AuthGateView} from "../../views/auth-gate/view.js"
import {AppsSidebarView} from "../../views/apps-sidebar/view.js"
import {AppDetailsView} from "../../views/app-details/view.js"

import {mockApps} from "./mocks.js"
import type {AppData} from "./types.js"

export const AppsView = view(use => () => {
	use.css(themeCss, styleCss)

	const $isLoggedIn = use.signal(false)
	const $apps = use.signal<AppData[]>([...mockApps])
	const $selectedAppId = use.signal(mockApps[0].id)

	const addApp = () => {
		const newApp: AppData = {
			id: String(Date.now()),
			name: "New App",
			appId: `app_${Math.random().toString(36).slice(2, 14)}`,
			origins: "",
			providers: {authlocal: true, google: false, apple: false, microsoft: false},
		}
		$apps.value = [...$apps.value, newApp]
		$selectedAppId.value = newApp.id
	}

	const updateApp = (updatedApp: AppData) => {
		$apps.value = $apps.value.map(app => app.id === updatedApp.id ? updatedApp : app)
	}

	const selectedApp = $apps.value.find(app => app.id === $selectedAppId.value)

	return html`
		<div class=plate>
			${$isLoggedIn.value
				? html`
					<div class=layout>
						${AppsSidebarView({
							onAddApp: addApp,
							apps: $apps.value,
							selectedAppId: $selectedAppId.value,
							onSelectApp: (id: string) => $selectedAppId.value = id,
						})}
						${selectedApp
							? AppDetailsView({
									app: selectedApp,
									onUpdateApp: updateApp
								})
							: null
						}
					</div>
				`
				: AuthGateView({onLogin: () => $isLoggedIn.value = true})}
		</div>
	`
})

