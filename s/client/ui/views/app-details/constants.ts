import {ProviderKey} from "../../pages/apps/types.js"

export const providers: Array<{key: ProviderKey; label: string; emoji: string}> = [
	{key: "authlocal", label: "authlocal", emoji: "🔐"},
	{key: "google", label: "google", emoji: "🔵"},
	{key: "microsoft", label: "microsoft", emoji: "🪟"},
]

export const setupSteps = [
	{num: 1, title: "install", desc: "add the package"},
	{num: 2, title: "initialize", desc: "set up the client"},
	{num: 3, title: "login", desc: "trigger auth flow"},
	{num: 4, title: "use data", desc: "access user info"},
]

export const codeExamples = (appId: string) => ({
	1: `# Install the shrimple-auth package

npm install shrimple-auth

# or with yarn

yarn add shrimple-auth

# or with bun

bun add shrimple-auth`,
	2: `import { shrimple } from 'shrimple-auth';

// Initialize with your app ID

const auth = shrimple({
	appId: '${appId}',
	onChange: (user) => {
		console.log('Auth state changed:', user);
	},
});`,
	3: `// Trigger login popup

auth.loginPopup();

// Or use redirect flow

auth.loginRedirect();

// Logout the user

auth.logout();`,
	4: `// Access current user

const user = auth.user;

// User object contains:

// - id: string
// - name: string
// - email: string
// - provider: 'authlocal' | 'google' | 'apple' | 'microsoft'
// - sessionId: string
// - token: string (JWT)

if (user) {
	console.log(
		Welcome, user.name!
	);
}`,
})
