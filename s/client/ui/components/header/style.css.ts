
import {css} from "lit"
export default css`@layer view {

:host {
	display: block;
	width: 100%;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0.5em 1em;
	background: var(--plate);
	backdrop-filter: blur(0.5em);
	border-radius: 0em 0em 1em 1em;
	border-bottom: 0.1em solid #fff2;
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
		color: color-mix(in oklch, transparent, var(--text) 60%);

		&[data-active] {
			color: color-mix(in oklch, transparent, var(--text) 80%);
			text-decoration: underline;
		}
	}
}

}`

