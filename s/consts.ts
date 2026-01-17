
export const consts = {
	readme: "https://github.com/e280/shrimple#readme",
	stuff: "https://stuff.sfo3.cdn.digitaloceanspaces.com/shrimple",

	providers: [
		{
			name: "sign in via authlocal",
			emoji: "🔐",
			description: "cryptographic logins",
			free: true,
			premium: false,
		},
		{
			name: "sign in via google",
			emoji: "🔵",
			free: false,
			premium: true,
		},
		{
			name: "sign in via github",
			emoji: "😾",
			free: false,
			premium: true,
		},
		{
			name: "sign in via discord",
			emoji: "🎮",
			free: false,
			premium: true,
		},
	],

	tiers: [
		{
			name: "shrimp",
			emoji: "🦐",
			price: "$0",
			period: "/month",
			highlight: "free",
			features: [
				"infinity authlocal logins",
			],
		},
		{
			name: "crab",
			emoji: "🦀",
			price: "$3",
			period: "/month",
			highlight: null,
			features: [
				"10k premium logins/month",
				"infinity authlocal logins",
			],
		},
		{
			name: "lobster",
			emoji: "🦞",
			price: "$9",
			period: "/month",
			highlight: null,
			features: [
				"100k premium logins/month",
				"infinity authlocal logins",
			],
		},
		{
			name: "whale",
			emoji: "🐋",
			price: "$69",
			period: "/month",
			highlight: "nice",
			features: [
				"infinity premium logins/month",
				"infinity authlocal logins",
			],
		},
	],
}

