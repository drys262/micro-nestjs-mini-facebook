// module.exports = {
// 	parser: '@typescript-eslint/parser',
// 	extends: [
// 		'airbnb-base',
// 		'plugin:import/typescript',
// 		'plugin:@typescript-eslint/recommended',
// 		'prettier',
// 		'prettier/@typescript-eslint',
// 	],
// 	root: true,
// 	env: {
// 		node: true,
// 		jest: true,
// 	},
// 	rules: {
// 		'import/no-extraneous-dependencies': [
// 			'error',
// 			{ devDependencies: ['**/*spec.ts'] },
// 		],
// 		'no-useless-constructor': 'off',
// 		'import/extensions': 'off',
// 		'@typescript-eslint/no-useless-constructor': 'error',
// 	},
// };

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'airbnb-base',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-useless-constructor': 'off',
		'import/export': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'class-methods-use-this': 'off',
		'lines-between-class-members': 'off',
	},
};
