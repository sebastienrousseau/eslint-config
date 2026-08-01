/**
 * Modern ESLint Flat Configuration (ESLint 9+)
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        exports: "writable",
        module: "writable",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "camelcase": ["warn", { properties: "always" }],
      "comma-dangle": ["error", "only-multiline"],
      "comma-spacing": ["error", { before: false, after: true }],
      "curly": ["error", "all"],
      "dot-location": ["error", "property"],
      "eol-last": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "no-console": "off",
      "no-irregular-whitespace": "error",
      "no-multi-str": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0, maxEOF: 1 }],
      "no-trailing-spaces": "error",
      "no-unexpected-multiline": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
      "operator-linebreak": ["error", "after"],
      "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      "semi": ["error", "always"],
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
      "wrap-iife": ["error", "inside"],
    },
  },
];
