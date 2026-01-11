import {ProviderKey} from "../../pages/apps/types.js"

export const providers: Array<{key: ProviderKey; label: string; emoji: string}> = [
	{key: "authlocal", label: "AuthLocal", emoji: "🔐"},
	{key: "google", label: "Google", emoji: "🔵"},
	{key: "apple", label: "Apple", emoji: "🍎"},
	{key: "microsoft", label: "Microsoft", emoji: "🪟"},
]

export const setupSteps = [
	{num: 1, title: "Install", desc: "Add the package"},
	{num: 2, title: "Initialize", desc: "Set up the client"},
	{num: 3, title: "Login", desc: "Trigger auth flow"},
	{num: 4, title: "Use Data", desc: "Access user info"},
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
