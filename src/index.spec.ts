import codeToTitle from ".";

const specialChars = ["&", "'", "\"", "\r", "\n", "\\", "\t", "\b", "\f"];

const regexStrs = [
	".",
	"+",
	"*",
	"?",
	"?:",
	"?!",
	"?=",
	"(",
	")",
	"(a)",
	"[",
	"]",
	"[abc]",
	"{",
	"}",
	"{5}",
];

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

		const noSwapResult = "Swap@with Spaces_test";

		/**
		 * Shorthand function for running 'codeToTitle', passing the
		 * above test string and passing the provided 'replaceWithSpace'
		 * option.
		 *
		 * @param {string | string[] | boolean} replaceWithSpace The option to pass
		 * as the 'replaceWithSpace' option
		 * @param {string} [testOn=test] The string to test on. If not provided,
		 * defaults to the test string above.
		 * @returns {string} The result of passing 'test' to 'replaceWithSpace'
		 */
		const spaceSwap = (
			replaceWithSpace: string | string[] | boolean,
			testOn: string = test
		) => codeToTitle(testOn, { replaceWithSpace });

		//# Standard test
		expect(spaceSwap(["@", "_"])).toEqual("Swap With Spaces Test");

		//# Passing boolean values
		expect(spaceSwap(true)).toEqual("Swap@with Spaces Test");
		expect(spaceSwap(false)).toEqual("Swap@with Spaces_test");

		//# '@' symbol, as single string and in single item array
		const atSwapResult = "Swap With Spaces_test";
		expect(spaceSwap(["@"])).toEqual(atSwapResult);
		expect(spaceSwap("@")).toEqual(atSwapResult);

		//# Characters that are not in string
		expect(spaceSwap("A")).toEqual(noSwapResult);
		expect(spaceSwap("<")).toEqual(noSwapResult);
		expect(spaceSwap("z")).toEqual(noSwapResult);

		//# Characters used in regex (that are in the string)
		for (const regexStr of regexStrs) {
			expect(
				spaceSwap(regexStr, `swap${regexStr}with Spaces${regexStr}test`)
			).toEqual("Swap With Spaces Test");
		}

		//# Characters used in regex (that are NOT in the string)
		for (const regexStr of regexStrs) {
			expect(spaceSwap(regexStr)).toEqual(noSwapResult);
		}
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

		//# Multi-character breakups
		testBreakup("word");
		testBreakup("WORD");

		//# Special characters
		for (const char of specialChars) {
			testBreakup(char);
		}

		//# Special Regex Sequences
		for (const str of regexStrs) {
			testBreakup(str);
		}

		//# Misc. tests
		const random = `${Math.random()}`;
		testBreakup(random);
		testBreakup("     ");
	});

	test("Capitalize words", () => {
		expect(
			codeToTitle(
				"camelCase kebab-lowercase kebab-Uppercase snake_lowercase snake_Uppercase",
				{ capitalizeWords: false }
			)
		).toEqual(
			"camel Case kebab lowercase kebab Uppercase snake lowercase snake Uppercase"
		);
	});

	test("All disabled", () => {
		const test =
			"camelCase kebab-lowercase kebab-Uppercase snake_lowercase snake_Uppercase";
		expect(
			codeToTitle(test, {
				replaceWithSpace: [],
				breakupCamelCase: false,
				capitalizeWords: false,
			})
		).toEqual(test);
	});
});
