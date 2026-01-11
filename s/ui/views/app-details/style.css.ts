import {css} from "lit"

export default css`@layer view {
:host {
	flex: 1;
}

.container {
	height: 100%;

	.details {
		height: 100%;
		overflow: auto;
		padding: var(--padding-big);
	}

	.details-inner {
		max-width: 52rem;
		display: flex;
		flex-direction: column;
		gap: var(--padding-big);
	}

	.field-group {
		display: flex;
		flex-direction: column;
		gap: var(--padding-small);
	}

	.label {
		font-size: var(--font-size-small);
		font-weight: 600;
		color: var(--text-muted);
	}

	.input {
		&.name {
			font-size: var(--font-size-big);
			font-weight: 600;
			height: 3rem;
		}

		&.code {
			font-family: var(--font-tech);
			background: var(--bg-muted);
			color: var(--text-muted);
		}
	}

	.provider-block {
		display: flex;
		flex-direction: column;
		gap: var(--padding-smallish);
	}

	.provider-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: var(--padding-smallish);
	}

	.provider-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--padding-smallish);
		padding: var(--padding-smallish);
		border-radius: var(--rounded);
		border: 1px solid var(--border);
		background: var(--bg-card);
	}

	.provider-label {
		display: inline-flex;
		align-items: center;
		gap: var(--padding-small);
		font-size: var(--font-size-small);
		font-weight: 600;
	}

	.switch {
		width: 2.6rem;
		height: 1.4rem;
		border-radius: 999px;
		border: none;
		background: var(--input);
		padding: 0.15rem;
		cursor: pointer;
		transition: background var(--anim-fast) ease;
		display: flex;
		align-items: center;

		.switch-thumb {
			width: 1.1rem;
			height: 1.1rem;
			border-radius: 999px;
			background: white;
			transform: translateX(0);
			transition: transform var(--anim-fast) ease;
		}

		&[data-on] {
			background: var(--prime);

			.switch-thumb {
				transform: translateX(1.2rem);
			}
		}
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: var(--padding-smallish);
	}

	.step-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: var(--padding-small);
	}

	.step {
		border-radius: var(--rounded);
		border: 1px solid var(--border);
		background: var(--bg-card);
		padding: var(--padding-smallish);
		display: flex;
		flex-direction: column;
		gap: var(--padding-smaller);
		text-align: center;
		cursor: pointer;
		transition: border-color var(--anim-fast) ease, box-shadow var(--anim-fast) ease;

		&[data-active] {
			border-color: var(--prime);
			background: color-mix(in oklab, transparent, var(--prime) 10%);
			box-shadow: 0 0 0 2px color-mix(in oklab, transparent, var(--prime) 20%);
		}

		.step-num {
			font-size: var(--font-size-big);
			font-weight: 700;
			color: var(--prime);
		}

		.step-title {
			font-size: var(--font-size-smaller);
			font-weight: 600;
		}

		.step-desc {
			font-size: var(--font-size-smaller);
			color: var(--text-muted);
		}
	}

	.code-block {
		pre {
			margin: 0;
			padding: var(--padding);
			border-radius: var(--rounded);
			background: var(--bg-code);
			color: var(--text-code);
			font-family: var(--font-tech);
			font-size: var(--font-size-small);
			overflow-x: auto;
			border: 1px solid var(--border);
		}
	}

	@media (max-width: 900px) {
		.details {
			padding: var(--padding);
		}
	}
}
}
`
