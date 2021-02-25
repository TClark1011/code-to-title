module.exports = {
	"testEnvironment": "node",
	"testTimeout": 10000,
	"testPathIgnorePatterns": ["/node_modules/", "/build/"],
	"transform": {
		".(ts|tsx)": "ts-jest",
	},
	"testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
	"moduleFileExtensions": ["ts", "tsx", "js"],
};
