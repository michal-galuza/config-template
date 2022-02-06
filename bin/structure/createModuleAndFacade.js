const fs = require("fs");
const { EOL } = require("os");

module.exports = (moduleName, modulePath) => {
	const p = (path) => `${modulePath}/${path}`;

	const moduleNameFUppercase =
		moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

	fs.mkdirSync(p("ports"), () => {});
	fs.mkdirSync(p("modules"), () => {});

	fs.writeFileSync(
		p(`ports/${moduleName}-facade.port.ts`),
		`export abstract class ${moduleNameFUppercase}FacadePort {}${EOL}`,
		{
			recursive: true,
		},
		() => {},
	);

	fs.writeFileSync(
		p(`ports/index.ts`),
		`export * from "./${moduleName}-facade.port";${EOL}`,
		{
			recursive: true,
		},
		() => {},
	);
	fs.writeFileSync(
		p(`${moduleName}.facade.ts`),
		'import { Injectable } from "@nestjs/common";' +
			EOL +
			`import { ${moduleNameFUppercase}FacadePort } from "./ports";` +
			EOL +
			EOL +
			"@Injectable()" +
			EOL +
			`export class ${moduleNameFUppercase}Facade extends ${moduleNameFUppercase}FacadePort {}` +
			EOL,
		{ recursive: true },
		() => {},
	);

	fs.writeFileSync(
		p(`modules/${moduleName}.module.ts`),
		`import { Module } from "@nestjs/common";` +
			EOL +
			`import { ${moduleNameFUppercase}Facade } from "../${moduleName}.facade";` +
			EOL +
			`import { ${moduleNameFUppercase}FacadePort } from "../ports";` +
			EOL +
			EOL +
			`@Module({` +
			EOL +
			`	imports: [],` +
			EOL +
			`	providers: [{ provide: ${moduleNameFUppercase}FacadePort, useClass: ${moduleNameFUppercase}Facade }],` +
			EOL +
			`	exports: [{ provide: ${moduleNameFUppercase}FacadePort, useClass: ${moduleNameFUppercase}Facade }],` +
			EOL +
			`	controllers: [],` +
			EOL +
			`})` +
			EOL +
			`export class ${moduleNameFUppercase}Module {}` +
			EOL,
		{ recursive: true },
		() => {},
	);

	fs.writeFileSync(
		`${modulePath}/index.ts`,
		`export { ${moduleNameFUppercase}Facade } from "./${moduleName}.facade";` +
			EOL +
			`export { ${moduleNameFUppercase}Module } from "./modules/${moduleName}.module";` +
			EOL,
		{ recursive: true },
		() => {},
	);
};
