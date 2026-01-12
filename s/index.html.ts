
import {ssg, html} from "@e280/scute"

const title = "Shrimple auth"
const domain = "shrimple.io"
const favicon = "/assets/shrimple.png"
const description = "shrimplest cheapest auth on the web "

export default ssg.page(import.meta.url, async orb => ({
	title,
	js: "main.bundle.min.js",
	dark: true,

	socialCard: {
		title,
		description,
		themeColor: "#f06542",
		siteName: domain,
		image: `https://${domain}${favicon}`,
	},

	head: html`
		<link rel="icon" href="${favicon}">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&display=swap" rel="stylesheet">
		<style>${orb.inject("ui/styles/layer.css")}</style>
		<style>${orb.inject("ui/styles/vars.css")}</style>
		<style>${orb.inject("ui/styles/core.css")}</style>
		<style>${orb.inject("ui/styles/page.css")}</style>
		<meta content="app-version" value="${orb.packageVersion()}"/>
	`,

	body: html`
		<shrimple-shell></shrimple-shell>
	`,
}))
