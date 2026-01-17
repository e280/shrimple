
import {dom, view} from "@e280/sly"
import {context} from "./ui/context.js"
import {ShrimpleHeader} from "./ui/components/header/component.js"

dom.register({
	ShrimpleHeader,
	ShrimpleShell: view.component(() => context.router.render()),
})

