import codeToTitle from "..";

// describe("Works", () => {
// 	it("Returns an output", () => {
// 		const result = sayHiFrom("somewhere");
// 		expect(result).toBeTruthy();
// 	});

// 	it("Returns correct output", () => {
// 		const result = sayHiFrom("testing");
// 		expect(result).toEqual("Hello from testing!");
// 	});
// });

describe("Tests", () => {
	it("Does space swaps", () => {
		const test = "one-two_three";
		expect(codeToTitle(test).toUpperCase()).toEqual(
			"one two three".toUpperCase()
		);
	});
});
