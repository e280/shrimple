
PRAGMA foreign_keys = ON;

-- users
CREATE TABLE IF NOT EXISTS users (
	id TEXT PRIMARY KEY
);

-- authlocal provider
CREATE TABLE IF NOT EXISTS providerAuthlocal (
	id TEXT PRIMARY KEY,
	userId TEXT NOT NULL,
	FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- google provider
CREATE TABLE IF NOT EXISTS providerGoogle (
	id TEXT PRIMARY KEY,
	userId TEXT NOT NULL,
	FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- login events
CREATE TABLE IF NOT EXISTS eventLogin (
	id TEXT PRIMARY KEY,
	time INTEGER NOT NULL,
	provider TEXT NOT NULL CHECK (provider IN ('authlocal', 'google')),
	providerId TEXT NOT NULL
	-- polymorphic reference, intentionally no FK
);

-- apps
CREATE TABLE IF NOT EXISTS apps (
	id TEXT PRIMARY KEY,
	userId TEXT NOT NULL,
	name TEXT NOT NULL,
	origins TEXT NOT NULL,
	providers TEXT NOT NULL,
	FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- indexes
CREATE INDEX IF NOT EXISTS idx_providerAuthlocal_userId
	ON providerAuthlocal(userId);

CREATE INDEX IF NOT EXISTS idx_providerGoogle_userId
	ON providerGoogle(userId);

CREATE INDEX IF NOT EXISTS idx_eventLogin_time
	ON eventLogin(time);

CREATE INDEX IF NOT EXISTS idx_apps_userId
	ON apps(userId);

