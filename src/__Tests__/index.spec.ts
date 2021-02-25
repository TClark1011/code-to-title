import codeToTitle from "..";

const specialChars = ["&", "'", "\"", "\r", "\n", "\\", "\t", "\b", "\f"];

describe("Basic functionality", () => {
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

describe("Options", () => {
	test("replaceWithSpace", () => {
		const test = "swap@with Spaces_test";
		const atSwapResult = "Swap With Spaces_test";

		expect(codeToTitle(test, { replaceWithSpace: ["@"] })).toEqual(
			atSwapResult
		);

		expect(codeToTitle(test, { replaceWithSpace: "@" })).toEqual(atSwapResult);
		//? Test passing a single string instead of a string array
	});
	test("breakupCamelCase", () => {
		const test = "camelCase testString";

		/**
		 * Generate expected test results
		 *
		 * @param {string} breakupWith What instances of camel case should be
		 * broken up with.
		 * @returns {string} Generated expected test result
		 */
		const resultGenerator = (breakupWith: string) =>
			"Camel@Case Test@String".replace(new RegExp("@", "g"), breakupWith);

		/**
		 * Shorthand alias function for running 'codeToTitle(test, ...options)'
		 *
		 * @param {string | boolean} breakupCamelCase The value to pass to the
		 * 'breakupCamelCase' option.
		 * @returns {string} The result of running 'codeToTitle(test, {breakupCamelCase})'
		 */
		const getBreakup = (breakupCamelCase: string | boolean) =>
			codeToTitle(test, { breakupCamelCase });

		/**
		 * Function for generating expect test statements for testing
		 * the 'breakupCamelCase' option
		 *
		 * @param {string | boolean} breakupWith The string to pass to the
		 * 'breakupCamelCase' option in the 'codeToTitle' function.
		 * @param {string} [swap=breakupWith] The string to pass to the
		 * 'resultGenerator' function. Defaults to the same value as
		 * 'breakupWith' if 'breakupWith' is a boolean, this defaults to
		 * an empty string;
		 */
		const testBreakup = (
			breakupWith: string | boolean,
			swap: string = typeof breakupWith === "string" ? breakupWith : ""
		) => {
			expect(getBreakup(breakupWith)).toEqual(resultGenerator(swap));
		};

		//# Passing 'true' is equivalent to the default.
		expect(getBreakup(true)).toEqual(codeToTitle(test));

		//# Two different methods of not breaking up camelCase
		testBreakup(false, "");
		testBreakup("");

		//# Standard single character breakups
		testBreakup("_");
		testBreakup("A");

		//# Mutli-character breakups
		testBreakup("word");
		testBreakup("WORD");

		//# Special characters
		for (const char of specialChars) {
			testBreakup(char);
		}

		//# Misc. tests
		const random = `${Math.random()}`;
		testBreakup(random);
		testBreakup("     ");
	});
});
