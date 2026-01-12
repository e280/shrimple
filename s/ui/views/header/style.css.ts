import {css} from "lit"

export default css`@layer view {
.container {
	.site-header {
		position: fixed;
		inset: 0 0 auto 0;
		max-width: var(--page-width);
		margin: auto;
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
		justify-content: start;
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
		flex: 1 1 auto;
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

	.mobile-actions {
		display: none;
		align-items: center;
		gap: var(--padding-smallish);
	}

	.menu-toggle {
		display: flex;
		padding: 0;
		width: 2.5rem;
		height: 2.5rem;

		.menu-icon {
			width: 1.2rem;
			height: 1.2rem;
		}
	}

	.mobile-menu {
		z-index: 2;
		position: fixed;
		inset: var(--header-size) 0 0 0;
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--anim) ease;

		&[data-open] {
			opacity: 1;
			pointer-events: auto;

			.menu-panel {
				transform: translateY(0);
				opacity: 1;
			}
		}

		.menu-backdrop {
			position: absolute;
			inset: 0;
			background: color-mix(in oklab, transparent, var(--bg) 70%);
			border: none;
		}

		.menu-panel {
			position: relative;
			margin: var(--padding) auto 0;
			width: min(420px, 92%);
			background: var(--bg-card);
			border: 1px solid var(--border);
			border-radius: var(--rounded-big);
			box-shadow: var(--shadow-big);
			padding: var(--padding-big);
			display: flex;
			flex-direction: column;
			gap: var(--padding-big);
			transform: translateY(-12px);
			opacity: 0;
			transition: transform var(--anim) ease, opacity var(--anim) ease;
		}

		.menu-nav {
			display: flex;
			flex-direction: column;
			gap: var(--padding);

			.nav-link {
				font-size: var(--font-size-big);
				color: var(--text);
			}
		}

		.menu-actions {
			display: flex;
			flex-direction: column;
			gap: var(--padding-smallish);
		}
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

	@media (max-width: 720px) {
		.nav {
			display: none;
		}

		.actions {
			display: none;
		}

		.mobile-actions {
			display: inline-flex;
		}
	}
}
}
`
