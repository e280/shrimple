import {css} from "lit"

export default css`@layer view {

.plate {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	min-height: 100%;

	> * {
		width: 100%;
	}
}

[view="header"] {
}

main {
	padding-top: var(--header-size);
}

[view="footer"] {
}

}
`
