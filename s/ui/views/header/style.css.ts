
import {css} from "lit"
export default css`@layer view {

header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	max-width: var(--page-width);
	margin: auto;
	z-index: 1;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0.5em 1em;
	border-bottom: 0.1em solid #fff2;
	background: #fff1;
	backdrop-filter: blur(0.5em);
	border-radius: 0em 0em 1em 1em;
	box-shadow: 0em 0.5em 1em #0004;
}

nav {
	display: flex;
	gap: 1em;
	align-items: center;

	img {
		height: 1.5em;
	}

	a {
		color: color-mix(in oklch, transparent, var(--text) 40%);
	}
}

}`

