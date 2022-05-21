module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["plugin:import/recommended"],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "requireConfigFile": false
    },
    "plugins": ["import", "prettier"],
    "rules": {
        "camelcase": [1, { "properties": "always" }],
        "comma-dangle": 0,
        "comma-spacing": [1, { "before": false, "after": true }],
        "curly": 2,
        "dot-location": [2, "property"],
        "eol-last": 2,
        "eqeqeq": 2,
        "indent": [2, 2, { "SwitchCase": 1 }],
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": 2,
        "linebreak-style": 0,
        "no-console": 0,
        "no-irregular-whitespace": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": [2, { "max": 2 }],
        "no-spaced-func": 2,
        "no-trailing-spaces": 2,
        "no-unexpected-multiline": 2,
        "no-unused-vars": 2,
        "no-use-before-define": [2, "nofunc"],
        "operator-linebreak": [2, "after"],
        "quotes": [2, "double"],
        "semi": [2, "always"],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "never"],
        "space-infix-ops": 0,
        "strict": [2, "global"],
        "wrap-iife": [2, "inside"]
    },
    "globals": {
        "_": true
    }
};

