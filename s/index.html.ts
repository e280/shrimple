
import {ssg, html} from "@e280/scute"
import {consts} from "./consts.js"
import {stuff} from "./tools/stuff.js"

const title = "shrimple.io"
const domain = "shrimple.io"
const favicon = stuff("shrimp.png")
const description = "shrimplest cheapest auth on the web "

export default ssg.page(import.meta.url, async orb => ({
	title,
	dark: true,
	js: "client/main.bundle.min.js",

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

		<style>${orb.inject("client/styles/layer.css")}</style>
		<style>${orb.inject("client/styles/vars.css")}</style>
		<style>${orb.inject("client/styles/core.css")}</style>
		<style>${orb.inject("client/styles/page.css")}</style>
	`,

	body: html`
		<shrimple-header></shrimple-header>

		<main>
			<shrimple-base></shrimple-base>
		</main>

		<footer>
			<nav>
				<a href="https://e280.org/">e280.org</a>
				<a href="${consts.readme}">readme</a>
			</nav>
		</footer>
	`,
}))

