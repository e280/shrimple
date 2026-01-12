import {html} from "lit"
import {view} from "@e280/sly"

import themeCss from "../../theme.css.js"
import styleCss from "./style.css.js"

import {HeroView} from "../../views/hero/view.js"
import {HeaderView} from "../../views/header/view.js"
import {PricingView} from "../../views/pricing/view.js"
import {FeaturesView} from "../../views/features/view.js"
import {ProvidersView} from "../../views/providers/view.js"

export const HomeView = view(use => () => {
	use.css(themeCss, styleCss)

	return html`
		<div class="container">
		<div class="home">
			${HeaderView()}
			<main>
				${HeroView()}
				${FeaturesView()}
				${ProvidersView()}
				${PricingView()}
			</main>
		</div>
	
		</div>
	`
})
