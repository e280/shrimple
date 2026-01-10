import {css} from "lit"

export default css`@layer view {
.container {
	padding: var(--padding-jumbo) 0;

	h2 {
		text-align: center;
		font-size: var(--font-size-grand);
		margin-bottom: var(--padding-smallish);
	}

	.subtitle {
		text-align: center;
		margin: 0 auto var(--padding-grand);
		max-width: 36rem;
	}

	.feature-grid {
		display: grid;
		gap: var(--padding-bigger);
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	}

	.feature-card {
		padding: var(--padding-big);
		border-radius: var(--rounded-big);
		border: 1px solid var(--border);
		background: var(--bg-card);
		box-shadow: var(--shadow-small);
		transition: transform var(--anim) ease, box-shadow var(--anim) ease;

		&:hover {
			transform: translateY(-6px);
			box-shadow: var(--shadow-big);

			.emoji {
				transform: scale(1.08);
			}
		}

		.emoji {
			font-size: 2rem;
			margin-bottom: var(--padding);
			transition: transform var(--anim) ease;
		}

		h3 {
			margin: 0 0 var(--padding-small);
			font-size: var(--font-size-big);
		}
	}
}
}
`
