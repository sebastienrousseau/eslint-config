/**
 * Advanced custom ESLint configuration override
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  rules: { ...base.rules, "no-console": "error" }
};
console.log("Custom no-console level:", custom.rules["no-console"]);
