/**
 * Advanced usage example with custom overrides for @sebastienrousseau/eslint-config
 */
const baseConfig = require("../index.cjs");

const customConfig = Object.assign({}, baseConfig, {
  _custom: true,
  _timestamp: new Date().toISOString()
});

console.log("Custom extended configuration created:");
console.log(customConfig._custom ? "Custom configuration active" : "Error");
