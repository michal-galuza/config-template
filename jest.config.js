module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: ".",
	cacheDirectory: "./.cache/jest-e2e",
	coverageDirectory: "./coverage/unit",
	collectCoverageFrom: ["src/**/*.ts"],
	testEnvironment: "node",
	testMatch: ["<rootDir>/test/unit/**/*.spec.ts"],
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	coveragePathIgnorePatterns: [
		".module.ts",
		"interface",
		"type",
		"index.ts",
		"main.ts",
		".port.ts",
	],
};
