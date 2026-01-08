import {css} from 'lit'

export default css`
@layer page {
	:host {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
	.page {
		background: var(--bg-main);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6rem;
		padding: 4rem 1.5rem 6rem;
	}

	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1.25rem;
	}

	.hero .shrimp {
		width: 96px;
		height: auto;
		margin-bottom: 0.5rem;
		filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.6));
	}

	.hero h1 {
		font-size: clamp(2.4rem, 5vw, 3.2rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin: 0.5rem 0 0;
	}

	.hero h2 {
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--text-muted);
		margin: 0;
	}

	.hero p {
		max-width: 560px;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-muted);
		margin-top: 1rem;
	}

	.cta {
		margin-top: 1.5rem;
		padding: 0.9rem 2.2rem;
		border-radius: 14px;
		border: none;
		background: linear-gradient(180deg, #3d7bff, #2f6bff);
		color: white;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		box-shadow:
			0 10px 30px rgba(47, 107, 255, 0.35),
			inset 0 1px 0 rgba(255, 255, 255, 0.25);
		transition:
			transform 120ms ease,
			box-shadow 120ms ease,
			background 120ms ease;
	}

	.cta:hover {
		transform: translateY(-1px);
		background: linear-gradient(180deg, #4a86ff, var(--blue-hover));
		box-shadow:
			0 14px 36px rgba(47, 107, 255, 0.45),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}

	.docs {
		margin-top: 0.75rem;
		color: var(--text-muted);
		font-size: 0.9rem;
		opacity: 0.85;
	}

	.quote {
		font-size: 0.95rem;
		color: var(--text-muted);
		opacity: 0.9;
		text-align: center;
	}

}
`
