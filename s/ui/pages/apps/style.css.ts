
import {css} from "lit"
export default css`@layer view {

.plate {
	padding-top: var(--header-size);
	background: var(--bg);
}

.layout {
	display: flex;
}

@media (max-width: 900px) {
	.layout {
		flex-direction: column;
	}
}

}`

