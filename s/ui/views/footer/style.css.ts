import {css} from "lit"

export default css`@layer view {
.container {
	padding: var(--padding-hero) 0;
	border-top: 1px solid var(--border);
	background: color-mix(in oklab, transparent, var(--bg-muted) 30%);

	.footer-top {
		display: flex;
		flex-direction: column;
		gap: var(--padding-big);
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--padding-bigger);
	}

	.brand {
		text-align: center;
	}

	.brand-row {
		display: inline-flex;
		align-items: center;
		gap: var(--padding-small);
		font-size: var(--font-size-big);
		font-weight: 700;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--padding-big);
		font-size: var(--font-size-small);
	}

	.footer-bottom {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid var(--border);
		padding-top: var(--padding-big);
		font-size: var(--font-size-small);

		a {
			margin-left: var(--padding-smaller);
			color: var(--text);
			font-weight: 600;
		}
	}

	@media (min-width: 768px) {
		.footer-top {
			flex-direction: row;
			text-align: left;
		}

		.brand {
			text-align: left;
		}

		.footer-bottom {
			flex-direction: row;
		}
	}
}
}
`
