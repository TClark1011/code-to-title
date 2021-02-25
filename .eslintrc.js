module.exports = {
	"env": {
		"es2021": true,
		"node": true,
		"jest": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsdoc/recommended",
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"plugins": ["@typescript-eslint", "jsdoc", "prefer-arrow"],
	"rules": {
		"indent": [
			"error",
			"tab",
			{
				"VariableDeclarator": 1,
				"SwitchCase": 1,
				"ignoredNodes": ["ConditionalExpression"],
			},
		],
		"linebreak-style": "off",
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"prefer-arrow-callback": ["error"],
		"brace-style": "error",
		"no-mixed-spaces-and-tabs": "off",
		"no-useless-escape": "off",
		//# jsdoc Rules
		"jsdoc/require-jsdoc": [
			"error",
			{
				"require": {
					"ArrowFunctionExpression": true,
					"FunctionDeclaration": true,
				},
			},
		],
		"jsdoc/no-undefined-types": "off",
		//# prefer arrow function rules
		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{
				"disallowPrototype": true,
				"singleReturnOnly": false,
				"classPropertiesAllowed": false,
			},
		],
	},
};
