import codeToTitle from "..";

describe("Works", () => {
	test("Default character swaps", () => {
		expect(codeToTitle("one-two_three").toUpperCase()).toEqual(
			"one two three".toUpperCase()
		);
	});

	test("Camel Case", () => {
		expect(codeToTitle("camelCase").toUpperCase()).toEqual(
			"Camel Case".toUpperCase()
		);
	});

	test("Capitalization", () => {
		expect(codeToTitle("lower Upper lower")).toEqual("Lower Upper Lower");
	});
	test("Kitchen Sink", () => {
		expect(codeToTitle("camelCase lowerUpper Upper-lower lower_Upper")).toEqual(
			"Camel Case Lower Upper Upper Lower Lower Upper"
		);
	});
});
