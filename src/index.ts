import * as dotenv from "dotenv";

dotenv.config();

/**
 * Generates a strign saying hello
 *
 * @param {string} from Where the hello is coming from
 * @returns {string} A string that says hello and where the hello came from
 */
const sayHiFrom = (from: string): string => {
	return `Hello from ${from}!`;
};

console.log(sayHiFrom("index"));

export default sayHiFrom;
