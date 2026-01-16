
import {css} from "lit"
export default css`@layer view {

.featurettes {
	container-type: inline-size;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10em;

	> section {
		padding: 1em;
	}
}

section.title {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4em;

	font-size: min(1em, 3vw);
	height: calc(100vh - var(--header-size));
	padding-top: 4rem;
	text-align: center;

	&::before, &::after {
		content: "";
		display: block;
		flex: 1 1 auto;
	}

	&::after {
		flex: 2 1 auto;
	}

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
		gap: 0.8em;
	}

	h3 {
		opacity: 0.5;
		font-size: 1.5em;
		font-family: serif;
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

	width: 100%;

	overflow: clip;
	padding: 0;
	border-radius: 1.5em;

	video {
		opacity: 0.2;
		position: absolute;
		z-index: -1;
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

		font-size: 2em;
		padding: 1em;
		flex: 1 1 auto;
		gap: 0.5em;

		blockquote {
			text-align: left;
		}

		figcaption {
			padding-left: 1em;
			font-style: italic;
			text-align: right;
		}
	}

	img {
		opacity: 0.2;
		width: 25cqw;
		flex: 0 0 auto;
		mask-image: linear-gradient(to right, transparent 5%, black 50%);
		-webkit-mask-image: linear-gradient(to right, transparent 5%, black 50%);
	}
}

section.providers {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		text-align: center;
		font-size: var(--font-size-grand);
		margin-bottom: var(--padding-smallish);
	}

	.subtitle {
		text-align: center;
		margin: 0 auto var(--padding-huge);
		max-width: 32rem;
	}

	.provider-box {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.8em;
	}

	.provider-card {
		display: flex;
		align-items: center;
		gap: var(--padding);
		padding: var(--padding);

		border-radius: var(--rounded-big);
		border-top: 0.15em solid #fff4;
		background: #3b649945;
		box-shadow: var(--shadow);
	}

	.provider-emoji {
		font-size: 2rem;
	}

	.provider-info {
		flex: 1;
	}

	.provider-title {
		display: flex;
		align-items: center;
		gap: var(--padding-small);

		h3 {
			margin: 0;
			font-size: 1.5em;
		}
	}

	.free {
		background: color-mix(in oklab, transparent, var(--tier-shrimp) 15%);
		color: var(--tier-shrimp);
	}

	.toggle {
		width: 2.8rem;
		height: 1.5rem;
		border-radius: 999px;
		background: var(--prime);
		padding: 0.2rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.toggle-dot {
			width: 1.1rem;
			height: 1.1rem;
			border-radius: 999px;
			background: white;
			box-shadow: var(--shadow-small);
		}
	}
}

}`

