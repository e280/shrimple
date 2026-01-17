
import {dom, view} from "@e280/sly"
import {context} from "./ui/context.js"

dom.register({
	ShrimpleShell: view.component(() => context.router.render()),
})

