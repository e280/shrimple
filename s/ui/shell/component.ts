import {html} from "lit"
import {spa, view} from "@e280/sly"

import themeCss from "../theme.css.js"
import styleCss from "./style.css.js"

import {HomeView} from "../pages/home/view.js"
import {AppsView} from "../pages/apps/view.js"
import {HeaderView} from "../views/header/view.js"
import {FooterView} from "../views/footer/view.js"
import {NotFoundView} from "../views/not-found/view.js"

export class ShrimpleShell extends view.component(use => {
	use.css(themeCss, styleCss)

	const router = use.once(() => new spa.Router({
		routes: {
			home: spa.route("#/", async() => HomeView()),
			apps: spa.route("#/apps", async() => AppsView()),
		},
		notFound: () => NotFoundView(),
	}))

	use.mount(() => () => router.dispose())

	return html`
		<div class=plate>
			${HeaderView()}

			<main>
				${router.render()}
			</main>

			${FooterView()}
		</div>
	`
}) {}

