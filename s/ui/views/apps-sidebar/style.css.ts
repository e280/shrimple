import {css} from "lit"

export default css`@layer view {
:host {
	height: 100%;
}

.container {
	height: 100%;

	.sidebar {
		width: 16rem;
		border-right: 1px solid var(--border);
		background: color-mix(in oklab, transparent, var(--bg-muted) 40%);
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	.sidebar-list {
		padding: var(--padding);
		flex: 1;
		overflow: auto;
		display: flex;
		flex-direction: column;
		gap: var(--padding-small);
	}

	.app-item {
		text-align: left;
		border: none;
		border-radius: var(--rounded-small);
		padding: var(--padding-small) var(--padding-smallish);
		background: transparent;
		font-size: var(--font-size-small);
		cursor: pointer;
		transition: background var(--anim-fast) ease, color var(--anim-fast) ease;
		color: var(--text);

		&:hover {
			background: var(--bg-muted);
		}

		&[data-active] {
			background: var(--prime);
			color: var(--prime-text);
			font-weight: 600;
		}
	}

	.sidebar-footer {
		padding: var(--padding);
		border-top: 1px solid var(--border);
	}

	.add {
		width: 100%;
		justify-content: center;
		gap: var(--padding-small);

		.plus {
			font-size: 1.1rem;
			font-weight: 700;
		}
	}

	@media (max-width: 900px) {
		.sidebar {
			width: 100%;
			border-right: none;
			border-bottom: 1px solid var(--border);
		}
	}
}
}
`
