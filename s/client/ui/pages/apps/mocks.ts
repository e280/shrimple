
import {AppData} from "./types.js"

export const mockApps: AppData[] = [
	{
		id: "1",
		name: "My App",
		appId: "d7dcf9964106dc7e42c9d27dd1f99cb3a42be0af2e0b2c45580f705ae0382c4b",
		origins: "https://myapp.com, http://localhost:3000",
		providers: { authlocal: true, google: true, microsoft: false },
	},
	{
		id: "2",
		name: "Side Project",
		appId: "39bb431599a42963ca5ed072d58736d34c8303afb12dfdc8f1910054c32762ba",
		origins: "https://sideproject.dev",
		providers: { authlocal: true, google: false, microsoft: false },
	},
	{
		id: "3",
		name: "Client Site",
		appId: "a4ed9b301a265cf56705157bf55f39ca658f8e5bd78dec3d7f5fc6f83f9d5fe3",
		origins: "https://clientsite.com",
		providers: { authlocal: true, google: true, microsoft: true },
	},
]

