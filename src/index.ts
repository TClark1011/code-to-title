interface CodeToTitleOptions {
	replaceWithSpace?: string[];
	breakupCamelCase?: boolean;
	capitalizeWords?: boolean;
}

/**
 * Convert code formatted text to title formatted text
 *
 * @param {string} input The input string that will be formatted
 * @param {CodeToTitleOptions} options Options indicating how the input
 * string will be formatted
 * @param {string[]} [options.replaceWithSpace=["-","_"]] A list of strings,
 * all occurrences of which in the input string will be replaced with a space
 * @returns {string} The input string, formatted for use in a title
 */
const codeToTitle = (
	input: string,
	{
		replaceWithSpace = ["-", "_"],
		breakupCamelCase = true,
		capitalizeWords = true,
	}: CodeToTitleOptions = {}
): string => {
	let result = input;

	for (const item of replaceWithSpace) {
		result = result.replace(new RegExp(item, "g"), " ");
	}

	if (breakupCamelCase) {
		result = result.replace(/\B(?![a-z]+)[A-Z]/g, (match, index: number) =>
			index > 0 ? " " + match : match
		);
	}

	if (capitalizeWords) {
		result = result.replace(/\b[a-z]/gm, (match) => match.toUpperCase());
	}

	return result;
};

export default codeToTitle;
