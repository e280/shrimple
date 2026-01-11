import {css} from "lit"

export default css`@layer view {
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: var(--padding-hero) var(--padding);

	.auth {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.auth-card {
		width: min(420px, 100%);
		padding: var(--padding-huge);
	}

	.auth-head {
		text-align: center;
		margin-bottom: var(--padding-bigger);

		h1 {
			margin: 0 0 var(--padding-small);
			font-size: var(--font-size-huge);
		}
	}

	.auth-emoji {
		font-size: 3.2rem;
		margin-bottom: var(--padding-smallish);
	}

	.auth-form {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
	}

	.small {
		text-align: center;
		margin-top: var(--padding-big);
		font-size: var(--font-size-small);

		.link {
			background: none;
			border: none;
			color: var(--prime);
			font-weight: 600;
			cursor: pointer;
			margin-left: var(--padding-small);

			&:hover {
				text-decoration: underline;
			}
		}
	}
}

}
`
