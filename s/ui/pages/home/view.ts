import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"

import {HeroView} from "../../views/hero/view.js"
import {PricingView} from "../../views/pricing/view.js"
import {FeaturesView} from "../../views/features/view.js"
import {ProvidersView} from "../../views/providers/view.js"

export const HomeView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class=container>
			${HeroView()}
			${FeaturesView()}
			${ProvidersView()}
			${PricingView()}
		</div>
	`
})

