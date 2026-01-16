
import {css} from "lit"
export default css`@layer view {

:host {
	container-type: inline-size;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4em;
}

:host > section {
	padding: 1em;
}

section.title {
	display: flex;
	flex-direction: column;
	gap: 4em;

	padding-top: 4rem;
	font-size: min(1em, 3vw);
	text-align: center;

	img {
		width: 100%;
		max-width: 10em;
	}

	h1 {
		font-size: 5em;
		span:nth-child(2) {
			color: var(--prime);
		}
	}

	h2 {
		font-size: 2.2em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	}

	h3 {
		font-weight: 1em;
		opacity: 0.5;
		font-weight: normal;
		font-style: italic;
	}

	.actions {
		font-size: 1.3em;
		a, button {
			padding: 0.5em 2em;
		}
	}
}

section.philosophy {
	display: flex;
	flex-direction: column;
	gap: 3em;

	width: 100%;
	text-align: center;

	h2 {
		font-size: 2em;
	}

	.box {
		display: flex;
		flex-wrap: wrap;

		> section {
			flex: 1 0 10em;
			padding: 1em;

			h3 > span {
				color: var(--prime);
			}
		}
	}
}

section.quote {
	display: flex;
	position: relative;

	overflow: clip;
	padding: 0;
	background: #3332;
	background: linear-gradient(to bottom, #3332, transparent);
	border-top: 1px solid #fff2;
	border-radius: 1.5em;

	video {
		opacity: 0.2;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;

		object-fit: cover;

		mask-image:
			linear-gradient(to top,    transparent 5%, #fff 40%),
			linear-gradient(to bottom, transparent 5%, #fff 40%),
			linear-gradient(to left,   transparent 5%, #fff 40%),
			linear-gradient(to right,  transparent 5%, #fff 40%);

		mask-composite: intersect;
	}

	figure.text {
		font-family: serif;

		display: flex;
		flex-direction: column;
		justify-content: center;

		padding: 1em;
		font-size: 1.5em;
		flex: 1 1 auto;
		gap: 0.5em;

		blockquote {
			text-align: right;
		}

		figcaption {
			color: var(--prime);
			padding-left: 1em;
			font-style: italic;
			opacity: 0.7;
			text-align: right;
		}
	}

	img {
		opacity: 0.5;
		width: 25cqw;
		flex: 0 0 auto;
		mask-image: linear-gradient(to right, transparent 5%, black 50%);
		-webkit-mask-image: linear-gradient(to right, transparent 5%, black 50%);
	}
}

}`

