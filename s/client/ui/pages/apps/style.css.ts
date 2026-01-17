
import {css} from "lit"
export default css`@layer view {

.layout {
	display: flex;
}

@media (max-width: 900px) {
	.layout {
		flex-direction: column;
	}
}

}`

