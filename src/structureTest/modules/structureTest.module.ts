import { Module } from "@nestjs/common";
import { StructureTestFacade } from "../structureTest.facade";
import { StructureTestFacadePort } from "../ports";

@Module({
	imports: [],
	providers: [{ provide: StructureTestFacadePort, useClass: StructureTestFacade }],
	exports: [{ provide: StructureTestFacadePort, useClass: StructureTestFacade }],
	controllers: [],
})
export class StructureTestModule {}
