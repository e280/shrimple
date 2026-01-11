import {css} from "lit"

export default css`@layer view {
.container {
	.apps-page {
		background: var(--bg);
	}

	.apps-body {
		padding-top: var(--header-size);
	}

	.apps-layout {
		display: flex;
	}

	@media (max-width: 900px) {
		.apps-layout {
			flex-direction: column;
		}
	}
}
}
`
