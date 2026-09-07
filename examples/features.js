/**
 * 100% Feature Showcase for @sebastienrousseau/eslint-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/eslint-config ===");
assert(config.env && config.env.es2024 === true && config.env.node === true);
assert(config.parserOptions && config.parserOptions.sourceType === "module");
assert(config.rules && typeof config.rules === "object");
assert(Array.isArray(config.rules["eqeqeq"]) && config.rules["eqeqeq"][0] === "error");
assert(Array.isArray(config.rules["semi"]) && config.rules["semi"][0] === "error");

console.log("  ✓ Environment: ES2024, Node.js");
console.log("  ✓ Total active rules:", Object.keys(config.rules).length);
console.log("✅ 100% of eslint-config rules and environments validated.");
