import {css} from "lit"

export default css`@layer view {
.container {
	padding: var(--padding-jumbo) 0;
	background: color-mix(in oklab, transparent, var(--bg-secondary) 30%);

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

	.provider-grid {
		display: grid;
		gap: var(--padding);
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}

	.provider-card {
		display: flex;
		align-items: center;
		gap: var(--padding);
		padding: var(--padding);
		border-radius: var(--rounded-big);
		border: 1px solid var(--border);
		background: var(--bg-card);
		box-shadow: var(--shadow-small);
		transition: transform var(--anim) ease, box-shadow var(--anim) ease;

		&:hover {
			transform: translateY(-3px);
			box-shadow: var(--shadow);
		}
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
			font-size: var(--font-size);
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
}
`
