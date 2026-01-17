
import {ssg, html} from "@e280/scute"
import {consts} from "../consts.js"
import {stuff} from "../tools/stuff.js"
import {featTitle} from "./feats/title/template.js"
import {featQuote} from "./feats/quote/template.js"
import {featPricing} from "./feats/pricing/template.js"
import {featMindset} from "./feats/mindset/template.js"
import {featProviders} from "./feats/providers/template.js"

const title = "shrimple.io"
const domain = "shrimple.io"
const favicon = stuff("shrimp.png")
const description = "shrimplest cheapest auth on the web"

export default ssg.page(import.meta.url, async orb => ({
	title,
	dark: true,
	js: "main.bundle.min.js",

	socialCard: {
		title,
		description,
		themeColor: "#f06542",
		siteName: domain,
		image: favicon,
	},

	head: html`
		<meta content="app-version" value="${orb.packageVersion()}"/>

		<link rel="icon" href="${favicon}" crossorigin="anonymous"/>
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&display=swap"/>

		<style>${orb.inject("styles/vars.css")}</style>
		<style data-theme>${orb.inject("styles/theme.css")}</style>
		<style>${orb.inject("styles/page.css")}</style>
	`,

	body: html`
		<shrimple-header></shrimple-header>

		<main>
			<shrimple-shell>
				${orb.place(featTitle)}

				<div class=featurettes>
					${orb.place(featQuote)}
					${orb.place(featMindset)}
					${orb.place(featProviders)}
					${orb.place(featPricing)}
				</div>
			</shrimple-shell>
		</main>

		<footer>
			<p>learn more at the <a href="${consts.readme}">readme</a>.</p>
			<p>shrimple is an <a href="https://e280.org/">e280.org</a> project.</p>
		</footer>
	`,
}))

