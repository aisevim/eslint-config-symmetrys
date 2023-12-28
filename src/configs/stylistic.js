import { createConfig, interopDefault } from '../utils.js'

export async function stylisticConfig({ options = {} }) {
  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))

  return [
    {
      name: 'setup:stylistic',
      plugins: {
        stylistic: pluginStylistic,
      },
    },
    createConfig(options, {
      name: 'main:stylistic',
      rules: {
        'stylistic/array-bracket-newline': ['error', { multiline: true }],
        'stylistic/array-bracket-spacing': ['error', 'never'],
        'stylistic/array-element-newline': ['error', 'consistent'],
        'stylistic/arrow-parens': ['error', 'as-needed'],
        'stylistic/arrow-spacing': ['error'],
        'stylistic/block-spacing': ['error'],
        'stylistic/brace-style': ['error', '1tbs'],
        'stylistic/comma-dangle': ['error', 'always-multiline'],
        'stylistic/comma-spacing': ['error', { before: false, after: true }],
        'stylistic/comma-style': ['error', 'last'],
        'stylistic/computed-property-spacing': ['error', 'never'],
        'stylistic/dot-location': ['error', 'property'],
        'stylistic/eol-last': ['error', 'always'],
        'stylistic/function-call-argument-newline': ['error', 'consistent'],
        'stylistic/function-call-spacing': ['error', 'never'],
        'stylistic/function-paren-newline': ['error', 'multiline'],
        'stylistic/implicit-arrow-linebreak': ['error', 'beside'],
        'stylistic/indent': [
          'error',
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
            SwitchCase: 1,
            VariableDeclarator: 'first',
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionExpression: {
              parameters: 'first',
              body: 1,
            },
            StaticBlock: { body: 1 },
            CallExpression: { arguments: 'first' },
            ArrayExpression: 'first',
            ObjectExpression: 'first',
            ImportDeclaration: 'first',
            flatTernaryExpressions: true,
            offsetTernaryExpressions: false,
            ignoreComments: false,
          },
        ],
        'stylistic/jsx-quotes': ['error', 'prefer-double'],
        'stylistic/key-spacing': [
          'error',
          {
            mode: 'strict',
            beforeColon: false,
            afterColon: true,
          },
        ],
        'stylistic/keyword-spacing': [
          'error',
          {
            after: true,
            before: true,
          },
        ],
        'stylistic/linebreak-style': ['error', 'unix'],
        'stylistic/lines-between-class-members': ['error', 'always'],
        'stylistic/max-statements-per-line': ['error', { max: 1 }],
        'stylistic/multiline-ternary': ['error', 'always-multiline'],
        'stylistic/newline-per-chained-call': [
          'error',
          {
            ignoreChainWithDepth: 2,
          },
        ],
        'stylistic/no-confusing-arrow': ['error'],
        'stylistic/no-extra-parens': ['error', 'functions'],
        'no-extra-semi': ['error'],
        'stylistic/no-floating-decimal': ['error'],
        'stylistic/no-mixed-operators': ['error'],
        'stylistic/no-mixed-spaces-and-tabs': ['error'],
        'stylistic/no-multi-spaces': ['error'],
        'stylistic/no-multiple-empty-lines': [
          'error',
          {
            max: 2,
            maxBOF: 0,
            maxEOF: 0,
          },
        ],
        'stylistic/no-trailing-spaces': ['error'],
        'stylistic/no-whitespace-before-property': ['error'],
        'stylistic/nonblock-statement-body-position': ['error', 'beside'],
        'stylistic/object-curly-newline': ['error', { consistent: true }],
        'stylistic/object-curly-spacing': ['error', 'always'],
        'stylistic/operator-linebreak': ['error', 'after'],
        'stylistic/padded-blocks': [
          'error',
          {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
          },
        ],
        'stylistic/quote-props': ['error', 'consistent-as-needed'],
        'stylistic/quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
          },
        ],
        'stylistic/rest-spread-spacing': ['error', 'never'],
        'stylistic/semi': ['error', 'never'],
        'stylistic/space-before-blocks': ['error', 'always'],
        'stylistic/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'stylistic/space-in-parens': ['error', 'never'],
        'stylistic/space-infix-ops': ['error'],
        'stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
        'stylistic/spaced-comment': [
          'error', 'always', {
            block: {
              balanced: true,
              exceptions: ['*'],
              markers: ['!'],
            },
            line: {
              exceptions: ['/', '#'],
              markers: ['/'],
            },
          },
        ],
        'stylistic/switch-colon-spacing': ['error'],
        'stylistic/template-curly-spacing': ['error', 'always'],
        'stylistic/template-tag-spacing': ['error', 'never'],
        'stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
        'stylistic/member-delimiter-style': [
          'error', {
            multiline: {
              delimiter: 'none',
            },
            multilineDetection: 'brackets',
            overrides: {
              interface: {
                multiline: {
                  delimiter: 'none',
                },
              },
            },
            singleline: {
              delimiter: 'comma',
            },
          },
        ],
      },
    }),
  ]
}
