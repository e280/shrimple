import {css} from "lit"

export default css`@layer view {
.container {
	.not-found {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--padding-grand);
		background: var(--bg-muted);
	}

	.card {
		padding: var(--padding-huge) var(--padding-grand);
		border-radius: var(--rounded-big);
		border: 1px solid var(--border);
		background: var(--bg-card);
		text-align: center;
		box-shadow: var(--shadow);
	}

	h1 {
		font-size: var(--font-size-hero);
		margin-bottom: var(--padding-smallish);
	}

	.home-link {
		display: inline-block;
		margin-top: var(--padding-smallish);
		font-weight: 600;
		color: var(--prime);

		&:hover {
			text-decoration: underline;
		}
	}
}
}
`
