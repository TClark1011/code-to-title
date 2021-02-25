interface CodeToTitleOptions {
	replaceWithSpace?: string | string[];
	breakupCamelCase?: string | boolean;
	capitalizeWords?: boolean;
}

/**
 * Convert code formatted text to title formatted text
 *
 * @param {string} input The input string that will be formatted
 * @param {CodeToTitleOptions} options Options indicating how the input
 * string will be formatted
 * @param {string | string[]} [options.replaceWithSpace=["-","_"]] A string or
 * list of strings that should be replaced with spaces.
 * @param {string | boolean} [options.breakupCamelCase=" "] How to break up
 * instances of camel case naming (eg; 'camelCase'). If passed a string, that
 * string will be used to breakup camel cases. If passed 'false', camel cases will
 * not be broken up. If passed 'true', camel cases will be broken up with a space.
 * @param {boolean} [options.capitalizeWords=true] Weather or not to capitalize the first
 * letter of every word.
 * @returns {string} The input string, formatted for use in a title
 */
const codeToTitle = (
	input: string,
	{
		replaceWithSpace = ["-", "_"],
		breakupCamelCase = " ",
		capitalizeWords = true,
	}: CodeToTitleOptions = {}
): string => {
	let result = input;

	const replaceWithSpaceArr =
		typeof replaceWithSpace === "string"
			? [replaceWithSpace]
			: replaceWithSpace;
	for (const item of replaceWithSpaceArr) {
		const specialCharsEscaped = item.replace(
			/[-[\]{}()*+?.,\\^$|#\s]/g,
			"\\$&"
		);
		result = result.replace(new RegExp(specialCharsEscaped, "g"), " ");
	}

	if (breakupCamelCase) {
		const breakupWith = breakupCamelCase === true ? " " : breakupCamelCase;
		result = result.replace(/\B(?![a-z]+)[A-Z]/g, (match, index: number) =>
			index > 0 ? breakupWith + match : match
		);
	}

	if (capitalizeWords) {
		result = result.replace(/(?<=(\s|^))([a-z])/g, (match) =>
			match.toUpperCase()
		);
	}

	return result;
};

export default codeToTitle;
