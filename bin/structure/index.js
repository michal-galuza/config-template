const fs = require("fs");
const createModuleAndFacade = require("./createModuleAndFacade");

const moduleNameArg = process.argv.find((arg) => arg.includes("--name"));
const customDir = process.argv.find((arg) => arg.includes("--dir"));

if (!moduleNameArg) {
	throw Error("You must specify --name arg");
}

const moduleName = moduleNameArg.replace("--name=", "");
const dir = `${process.cwd()}/${
	customDir ? customDir.replace("--dir=", "") : "src"
}`;

const newModulePath = `${dir}/${moduleName}`;
const p = (path) => `${newModulePath}/${path}`;

const createModuleDir = () => {
	fs.mkdirSync(newModulePath, () => {});
	fs.mkdirSync(p("domain"), () => {});
	fs.mkdirSync(p("adapters"), () => {});
	fs.mkdirSync(p("use-cases"), () => {});
	fs.mkdirSync(p("ui"), () => {});

	fs.writeFileSync(p("/domain/index.ts"), "", () => {});
	fs.writeFileSync(p("adapters/index.ts"), "", () => {});
	fs.writeFileSync(p("use-cases/index.ts"), "", () => {});
	fs.writeFileSync(p("ui/index.ts"), "", () => {});

	createModuleAndFacade(moduleName, newModulePath);
};
createModuleDir();
