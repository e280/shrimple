import {AppData} from "./types.js"

export const mockApps: AppData[] = [
	{
		id: "1",
		name: "My App",
		appId: "app_abc123xyz",
		origins: "https://myapp.com, http://localhost:3000",
		providers: { authlocal: true, google: true, apple: false, microsoft: false },
	},
	{
		id: "2",
		name: "Side Project",
		appId: "app_def456uvw",
		origins: "https://sideproject.dev",
		providers: { authlocal: true, google: false, apple: true, microsoft: false },
	},
	{
		id: "3",
		name: "Client Site",
		appId: "app_ghi789rst",
		origins: "https://clientsite.com",
		providers: { authlocal: true, google: true, apple: true, microsoft: true },
	},
]
