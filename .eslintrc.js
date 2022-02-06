module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		sourceType: "module",
		tsconfigRootDir: __dirname,
	},
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: [
		".eslintrc.js",
		"jest.config.js",
		"jest-e2e.config.js",
		"bin/**/*",
		"dist/**/*",
	],
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "interface",
				prefix: ["I"],
				format: ["StrictPascalCase"],
			},
			{ selector: "class", format: ["StrictPascalCase"] },
			{
				selector: "variable",
				format: ["camelCase"],
			},
			{
				selector: "function",
				format: ["camelCase"],
			},
		],
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/no-explicit-any": "error",
	},
};
