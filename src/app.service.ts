import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	getHello(): string {
		return "hello";
	}

	sayHello(name: string): string {
		return "hello" + " " + name;
	}
}
