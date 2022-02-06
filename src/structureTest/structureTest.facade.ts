import { Injectable } from "@nestjs/common";
import { StructureTestFacadePort } from "./ports";

@Injectable()
export class StructureTestFacade extends StructureTestFacadePort {}
