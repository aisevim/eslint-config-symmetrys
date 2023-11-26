import stylistic from '@stylistic/eslint-plugin'

export async function node() {
	return [
		{
			files: ["**/*.?([cm])[jt]s?(x)"],
			plugins: {
				stylistic
			},
			rules: {
				'stylistic/array-bracket-newline': ["error", { "multiline": true }],
				'stylistic/array-bracket-spacing': [
					"error",
					"always",
					{
						"singleValue": false,
						"objectsInArrays": false,
						"arraysInArrays": false
					}
				],
				'stylistic/array-element-newline': [
					"error",
					{
						"multiline": true,
						"ArrayPattern": "never"
					}
				],
				'stylistic/arrow-parens': ["error", "as-needed"],
				'stylistic/arrow-spacing': ["error"],
				'stylistic/block-spacing': ["error"],
				'stylistic/brace-style': ["error", "1tbs"],
				'stylistic/comma-dangle': ["error", "always"],
				'stylistic/comma-spacing': ["error", { "before": false, "after": true }],
				'stylistic/comma-style': ["error", "last"],
				'stylistic/computed-property-spacing': ["error", "never"],
				'stylistic/dot-location': ["error", "property"],
				'stylistic/eol-last': ["error", "always"],
				'stylistic/function-call-argument-newline': ["error", "consistent"],
				'stylistic/function-call-spacing': ["error", "never"],
				'stylistic/function-paren-newline': ["error", "multiline"],
				'stylistic/implicit-arrow-linebreak': ["error", "beside"],
				'stylistic/indent': [
					"error",
					2,
					{
						ignoredNodes: [
							'TemplateLiteral *',
							'JSXElement',
							'JSXElement > *',
							'JSXAttribute',
							'JSXIdentifier',
							'JSXNamespacedName',
							'JSXMemberExpression',
							'JSXSpreadAttribute',
							'JSXExpressionContainer',
							'JSXOpeningElement',
							'JSXClosingElement',
							'JSXFragment',
							'JSXOpeningFragment',
							'JSXClosingFragment',
							'JSXText',
							'JSXEmptyExpression',
							'JSXSpreadChild',
							'TSUnionType',
							'TSIntersectionType',
							'TSTypeParameterInstantiation',
							'FunctionExpression > .params[decorators.length > 0]',
							'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
							'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
						],
						"SwitchCase": 1,
						"VariableDeclarator": "first",
						"outerIIFEBody": 1,
						"MemberExpression": 1,
						"FunctionExpression": {
							"parameters": "first",
							"body": 1
						},
						"StaticBlock": {"body": 1},
						"CallExpression": {"arguments": "first"},
						"ArrayExpression": "first",
						"ObjectExpression": "first",
						"ImportDeclaration": "first",
						"flatTernaryExpressions": true,
						"offsetTernaryExpressions": false,
						"ignoreComments": false
					}
				],
				'stylistic/jsx-quotes': ["error", "prefer-double"],
				'stylistic/key-spacing': [
					"error",
					{
						"mode": "strict",
						"beforeColon": false,
						"afterColon": true,
					}
				],
				'stylistic/keyword-spacing': [
					'error',
					{
						after: true,
						before: true
					}
				],
				'stylistic/linebreak-style': ["error", "unix"],
				'stylistic/lines-between-class-members': ["error", "always"],
				'stylistic/max-statements-per-line': ["error", { "max": 1 }],
				'stylistic/multiline-ternary': ["error", "always-multiline"],
				'stylistic/new-parens': ["error", "never"],
				'stylistic/newline-per-chained-call': [
					"error",
					{
						"ignoreChainWithDepth": 2
					}
				],
				'stylistic/no-confusing-arrow': ["error"],
				'stylistic/no-extra-parens': ["error", "functions"],
				'no-extra-semi': ["error"],
				'stylistic/no-floating-decimal': ["error"],
				'stylistic/no-mixed-operators': ["error"],
				'stylistic/no-mixed-spaces-and-tabs': ["error"],
				'stylistic/no-multi-spaces': ["error"],
				'stylistic/no-multiple-empty-lines': [
					'error',
					{
						max: 2,
						maxBOF: 0,
						maxEOF: 0
					}
				],
				'stylistic/no-tabs': ["error"],
				'stylistic/no-trailing-spaces': ["error"],
				'stylistic/no-whitespace-before-property': ["error"],
				'stylistic/nonblock-statement-body-position': ["error", "beside"],
				'stylistic/object-curly-newline': ["error", { "consistent": true }],
				'stylistic/object-curly-spacing': ["error", "always"],
				'stylistic/operator-linebreak': ["error", "after"],
			}
		},
		{
			files: [
				"**/*.const.?([cm])[jt]s?(x)",
				"**/*.consts.?([cm])[jt]s?(x)",
				"**/types/*.?([cm])[jt]s?(x)"
			],
			rules: {
				'stylistic/key-spacing': [
					"error",
					{
						"mode": "strict",
						"multiLine": {
							"beforeColon": false,
							"afterColon": true
						},
						"align": {
							"beforeColon": true,
							"afterColon": true,
							"on": "colon"
						}
					}
				],
				'stylistic/no-multi-spaces': [
					"error",
					{
						exceptions: {
							"Property": false,
							"VariableDeclarator": true
						}
					}
				]
			}
		}
	]
}
