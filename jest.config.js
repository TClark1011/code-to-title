module.exports = {
	"testEnvironment": "node",
	"testTimeout": 10000,
	"testPathIgnorePatterns": ["/node_modules/", "/build/"],
	"transform": {
		".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
	},
	"testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
	"moduleFileExtensions": ["ts", "tsx", "js"],
};
