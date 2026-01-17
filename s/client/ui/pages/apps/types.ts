export type ProviderKey = "authlocal" | "google" | "microsoft"

export type AppData = {
	id: string
	name: string
	appId: string
	origins: string
	providers: Record<ProviderKey, boolean>
}
