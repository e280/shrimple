import {css} from "lit"

export default css`@layer view {
.container {
	.site-header {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 40;
		height: var(--header-size);
		background: color-mix(in oklab, transparent, var(--bg) 85%);
		border-bottom: 1px solid var(--border);
		backdrop-filter: blur(16px);
	}

	.header-inner {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--padding-big);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--padding-small);
		font-weight: 700;
		color: var(--text);
		text-decoration: none;

		&:hover {
			.brand-text {
				text-decoration: underline;
			}
			.brand-emoji {
				transform: rotate(-8deg) scale(1.05);
			}
		}
	}

	.brand-emoji {
		font-size: 1.6rem;
		transition: transform var(--anim-fast) ease;
	}

	.brand-text {
		font-size: var(--font-size-big);
	}

	.brand-dot {
		color: var(--prime);
	}

	.nav {
		display: flex;
		align-items: center;
		gap: var(--padding-big);
	}

	.nav-link {
		font-size: var(--font-size-small);
		color: var(--text-muted);
		transition: color var(--anim-fast) ease;

		&:hover {
			color: var(--text);
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: var(--padding-smallish);
	}

	.theme-toggle {
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border-radius: 999px;
		position: relative;

		.icon {
			position: absolute;
			width: 1.1rem;
			height: 1.1rem;
			transition: transform var(--anim) ease, opacity var(--anim) ease;
		}

		.sun {
			opacity: 1;
			transform: rotate(0deg) scale(1);
		}

		.moon {
			opacity: 0;
			transform: rotate(-90deg) scale(0.4);
		}

		&[data-theme="dark"] {
			.sun {
				opacity: 0;
				transform: rotate(90deg) scale(0.4);
			}

			.moon {
				opacity: 1;
				transform: rotate(0deg) scale(1);
			}
		}
	}

	.sign-in {
		display: none;
	}

	@media (min-width: 640px) {
		.sign-in {
			display: inline-flex;
		}
	}

	@media (max-width: 720px) {
		.nav {
			display: none;
		}
	}
}
}
`
