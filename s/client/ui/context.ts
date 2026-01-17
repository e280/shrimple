
import {html} from "lit"
import {spa} from "@e280/sly"

import {AppsView} from "./pages/apps/view.js"
import {NotFoundView} from "./views/not-found/view.js"

export const context = {
	router: new spa.Router({
		notFound: () => NotFoundView(),
		routes: {
			home: spa.route("#/", async() => html`<slot></slot>`),
			apps: spa.route("#/apps", async() => AppsView()),
		},
	})
}

