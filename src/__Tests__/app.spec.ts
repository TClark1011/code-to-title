import sayHiFrom from "..";

describe("Greeting functionality", () => {
	it("Returns an output", () => {
		const result = sayHiFrom("somewhere");
		expect(result).toBeTruthy();
	});

	it("Returns correct output", () => {
		const result = sayHiFrom("testing");
		expect(result).toEqual("Hello from testing!");
	});
});
