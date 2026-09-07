/**
 * Basic usage example for @sebastienrousseau/eslint-config
 */
const config = require("../index.cjs");

console.log("Loaded configuration successfully:");
console.log(typeof config === "object" ? "Valid configuration object" : typeof config);
