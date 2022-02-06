import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "../../src/app.controller";
import { AppService } from "../../src/app.service";

describe("AppService", () => {
	let appService: AppService;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile();

		appService = app.get<AppService>(AppService);
	});

	describe("root", () => {
		it('should return "hello"', () => {
			expect(appService.getHello()).toBe("hello");
		});

		it("should return not null", () => {
			expect(appService.getHello()).not.toBeNull();
		});
	});

	describe("sayHello", () => {
		it('should return "hello adam"', () => {
			expect(appService.sayHello("adam")).toBe("hello adam");
		});

		it("should return not null", () => {
			expect(appService.sayHello("adam")).not.toBeNull();
		});
	});
});
