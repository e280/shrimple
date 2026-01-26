
export const consts = {
	readme: "https://github.com/e280/shrimple#readme",
	stuff: "https://stuff.sfo3.cdn.digitaloceanspaces.com/shrimple",

	db: {
		schemaPath: "s/server/db/schema.sql",
	},

	providers: [
		{
			name: "authlocal logins",
			emoji: "🔐",
			free: true,
			premium: false,
		},
		{
			name: "google logins",
			emoji: "🔵",
			free: false,
			premium: true,
		},
		{
			name: "github logins",
			emoji: "😾",
			free: false,
			premium: true,
		},
		{
			name: "discord logins",
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

