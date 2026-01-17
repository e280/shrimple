import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

import type {AppData} from "../../pages/apps/types.js"

type AppsSidebarProps = {
	apps: AppData[]
	selectedAppId: string
	onSelectApp: (id: string) => void
	onAddApp: () => void
}

export const AppsSidebarView = view(use => (props: AppsSidebarProps) => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
		<aside class="sidebar">
			<div class="sidebar-list">
				${props.apps.map(app => html`
					<button
						class="app-item"
						?data-active=${props.selectedAppId === app.id}
						@click=${() => props.onSelectApp(app.id)}
					>
						${app.name}
					</button>
				`)}
			</div>

			<div class="sidebar-footer">
				<button
					class="add"
					x-button
					data-outline
					@click=${props.onAddApp}
				>
					<span class="plus">+</span>
					New App
				</button>
			</div>
		</aside>
	
		</div>
	`
})
