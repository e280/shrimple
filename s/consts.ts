
export const consts = {
	readme: "https://github.com/e280/shrimple#readme",
	stuff: "https://stuff.sfo3.cdn.digitaloceanspaces.com/shrimple",

	providers: [
		{
			name: "authlocal",
			emoji: "🔐",
			description: "free logins on authlocal.org",
			free: true,
		},
		{
			name: "google",
			emoji: "🔵",
			description: "sign in with google accounts",
			free: false,
		},
		{
			name: "microsoft",
			emoji: "🪟",
			description: "sign in with microsoft accounts",
			free: false,
		},
	],

	tiers: [
		{
			name: "Shrimp",
			emoji: "🦐",
			price: "$0",
			period: "/month",
			description: "infinity free logins via authlocal.org",
			highlight: "Forever Free",
			color: "shrimp",
			features: ["Unlimited logins", "AuthLocal provider", "Basic support"],
		},
		{
			name: "Crab",
			emoji: "🦀",
			price: "$3",
			period: "/month",
			description: "10k logins via any provider",
			highlight: null,
			color: "crab",
			features: ["10,000 logins/mo", "All auth providers", "Email support"],
		},
		{
			name: "Lobster",
			emoji: "🦞",
			price: "$9",
			period: "/month",
			description: "100k logins via any provider",
			highlight: "Popular",
			color: "lobster",
			popular: true,
			features: ["100,000 logins/mo", "All auth providers", "Priority support", "Analytics"],
		},
		{
			name: "Whale",
			emoji: "🐋",
			price: "$69",
			period: "/month",
			description: "infinity logins via any provider",
			highlight: "nice",
			color: "whale",
			features: ["Unlimited logins", "All auth providers", "Dedicated support", "SLA guarantee", "Custom branding"],
		},
	],
}

