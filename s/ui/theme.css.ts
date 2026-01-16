import {cssReset} from "@e280/sly"
import {css} from "lit"

export default css`
@layer reset, underlay, view, overlay;

${cssReset}

@layer underlay {
	:host {
		color: var(--text);
		font-family: var(--font-primary);
	}

	*:focus-visible {
		outline: 0.2em solid var(--focus);
		outline-offset: 0.2em;
	}

	* {
		box-sizing: border-box;
	}

	::selection, ::-moz-selection {
		color: white;
		background: var(--selection);
	}

	button,
	input,
	select,
	textarea {
		font: inherit;
	}

	a {
		color: var(--prime);
		text-decoration: none;
		transition: color var(--anim-fast) ease;

		&:visited {
			color: color-mix(in srgb, var(--prime), purple 30%);
		}

		&:is(:hover, :focus-visible) {
			color: color-mix(in oklab, transparent, var(--prime) 85%);
			text-decoration: underline;
		}

		&:active {
			color: color-mix(in oklab, transparent, var(--prime) 60%);
		}
	}

	[x-content] {
		margin: 0 auto;
		padding: 0 var(--padding-big);
	}

	[x-muted] {
		color: var(--text-muted);
	}

	[x-sr] {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}

	[x-btn] {
		font-size: 1em;
		cursor: pointer;
		font-weight: bold;
		text-shadow: 0.04em 0.08em 0.10em #0008;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		gap: 0.2em;
		padding: 0.5em;

		background: var(--prime);
		color: var(--prime-text);
		border-radius: var(--rounded);
		box-shadow: var(--shadow);
		border: 0.15em solid #fff4;

		&[x-btn="subtle"] {
			color: var(--text);
			background: #8882;
			border: 0.15em solid color-mix(in oklch, transparent, currentColor 50%);
		}

		&:is(:hover, :focus-visible) {
			filter: brightness(120%);
			text-decoration: underline;
		}

		&:active {
			filter: brightness(80%);
			text-decoration: underline;
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
			box-shadow: none;
		}
	}

	[x-button] {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--padding-small);
		min-height: 2.5rem;
		padding: 0.65rem 1.25rem;
		border-radius: var(--rounded);
		border: 1px solid transparent;
		background: var(--prime);
		color: var(--prime-text);
		font-size: var(--font-size-small);
		font-weight: 600;
		cursor: pointer;
		transition:
			transform var(--anim-fast) ease,
			box-shadow var(--anim-fast) ease,
			background var(--anim-fast) ease,
			border-color var(--anim-fast) ease;
		box-shadow: var(--shadow);

		&:hover {
			transform: translateY(-1px);
			box-shadow: var(--shadow-big);
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
			transform: none;
			box-shadow: none;
		}

		&[x-button="subtle"], &[data-outline] {
			background: transparent;
			color: var(--text);
			border-color: var(--border);
			box-shadow: none;

			&:hover {
				background: color-mix(in oklab, transparent, var(--bg-accent) 40%);
				box-shadow: var(--shadow);
			}
		}

		&[data-ghost] {
			background: transparent;
			color: var(--text);
			box-shadow: none;

			&:hover {
				background: color-mix(in oklab, transparent, var(--bg-accent) 30%);
			}
		}

		&[data-size="sm"] {
			min-height: 2rem;
			padding: 0.4rem 0.85rem;
			font-size: var(--font-size-smaller);
			border-radius: var(--rounded-small);
		}

		&[data-size="lg"] {
			min-height: 3rem;
			padding: 0.75rem 1.75rem;
			font-size: var(--font-size);
			border-radius: var(--rounded-big);
		}
	}

	[x-input] {
		width: 100%;
		min-height: 2.75rem;
		padding: 0.6rem 0.85rem;
		border-radius: var(--rounded-small);
		border: 1px solid var(--input);
		background: var(--bg-card);
		color: var(--text);
		font-size: var(--font-size-small);
		transition:
			border-color var(--anim-fast) ease,
			box-shadow var(--anim-fast) ease;

		&:focus {
			outline: none;
			border-color: var(--prime);
			box-shadow: 0 0 0 3px color-mix(in oklab, transparent, var(--prime) 15%);
		}
	}

	[x-card] {
		border-radius: var(--rounded-big);
		border: 1px solid var(--border);
		background: var(--bg-card);
		box-shadow: var(--shadow-small);
	}

	[x-pill] {
		display: inline-flex;
		align-items: center;
		gap: var(--padding-smaller);
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
		font-size: var(--font-size-smaller);
		font-weight: 600;
	}

}`

