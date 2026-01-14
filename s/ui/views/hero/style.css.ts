import {css} from "lit"

export default css`@layer view {
.container {
	.hero {
		position: relative;
		overflow: hidden;
	}

	.shadow {
		position: absolute;;
		width: 100%;
		height: 100%;

		mask-image:
			linear-gradient(to top,    transparent, #fff 40%),
			linear-gradient(to bottom, transparent, #fff 40%),
			linear-gradient(to left,   transparent, #fff 40%),
			linear-gradient(to right,  transparent, #fff 40%);

		mask-composite: intersect;
	}

	video {
		position: absolute;
		filter: brightness(0.3);
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.float {
		position: absolute;
		font-size: 3rem;
		opacity: 0.12;
		animation: float 8s ease-in-out infinite;

		&.shrimp {
			left: 15%;
			top: 20%;
			font-size: 5rem;
		}

		&.shrimp-alt {
			right: 15%;
			top: 30%;
			font-size: 4rem;
			animation-delay: 1s;
		}

		&.crab {
			left: 25%;
			bottom: 15%;
			font-size: 4.5rem;
			animation-delay: 2s;
		}

		&.lobster {
			right: 28%;
			bottom: 20%;
			font-size: 3.5rem;
			animation-delay: 0.5s;
		}
	}

	.hero-inner {
		position: relative;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--padding-big);
		padding: 9em;
	}

	.hero-brand {
		display: inline-flex;
		align-items: center;
		gap: var(--padding-smallish);
		font-size: clamp(2rem, 5vw, 3.2rem);
		font-weight: 700;

		h1 {
			margin: 0;
			font-size: inherit;
		}
	}

	.hero-emoji {
		font-size: 3.2rem;
		animation: wiggle 4s ease-in-out infinite;
	}

	.accent {
		color: var(--prime);
	}

	blockquote {
		margin: 0;
		font-size: clamp(1.05rem, 2.6vw, 1.4rem);
		font-style: italic;
		color: var(--text-muted);
		max-width: 40rem;

		footer {
			margin-top: var(--padding-small);
			font-size: var(--font-size-small);
			font-style: normal;
		}
	}

	.tagline {
		font-size: clamp(1.4rem, 4vw, 2.1rem);
		font-weight: 700;
		margin: 0;
	}

	.hero-points {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: var(--padding) var(--padding-big);
		color: var(--text-muted);

		span {
			display: inline-flex;
			align-items: center;
			gap: var(--padding-small);
			font-size: var(--font-size-small);
		}
	}

	.check {
		color: var(--prime);
		font-weight: 700;
	}

	.hero-actions {
		display: flex;
		flex-direction: column;
		gap: var(--padding-smallish);
		align-items: center;
	}

	.hero-proof {
		font-size: var(--font-size-small);
	}

	@media (min-width: 640px) {
		.hero-actions {
			flex-direction: row;
		}
	}
}

@keyframes float {
	0% { transform: translateY(0px); }
	50% { transform: translateY(-12px); }
	100% { transform: translateY(0px); }
}

@keyframes wiggle {
	0%, 100% { transform: rotate(0deg); }
	25% { transform: rotate(-4deg); }
	75% { transform: rotate(4deg); }
}
}
`
