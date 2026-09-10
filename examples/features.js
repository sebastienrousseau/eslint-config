// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Feature showcase for @sebastienrousseau/eslint-config.
 *
 * Two things this example used to assert are gone as of 0.0.7, both because the
 * old configuration could not work on the ESLint versions this package claims
 * to support:
 *
 *  - the eslintrc shape (`config.env`, `config.parserOptions`), because ESLint
 *    10 removed eslintrc support entirely
 *  - the formatting rules (`semi`, `indent`, `quotes`, ...), because ESLint
 *    deprecated its layout rules and moved them to @stylistic, and because they
 *    contradicted @sebastienrousseau/prettier-config
 *
 * See docs/adr/0005-flat-config-only.md.
 */

"use strict";

const assert = require("node:assert/strict");
const config = require("../index.cjs");

console.log("=== Feature showcase: @sebastienrousseau/eslint-config ===");

assert.ok(Array.isArray(config), "a flat config is an array of config objects");
assert.ok(
  config.length > 0,
  "the array must contain at least one config object",
);

const [base] = config;

assert.ok(base.languageOptions, "flat config carries languageOptions");
assert.equal(base.languageOptions.ecmaVersion, 2024);
assert.equal(base.languageOptions.sourceType, "module");
assert.ok(base.languageOptions.globals.process, "Node globals are declared");

assert.ok(base.rules && typeof base.rules === "object", "rules are present");

// Correctness rules, which are ESLint's half of the job.
assert.ok(Array.isArray(base.rules.eqeqeq) && base.rules.eqeqeq[0] === "error");
assert.ok(Array.isArray(base.rules.curly) && base.rules.curly[0] === "error");
assert.equal(base.rules["no-irregular-whitespace"], "error");
assert.ok(Array.isArray(base.rules["no-unused-vars"]));

// Formatting rules must stay out, or this config fights prettier-config.
for (const layout of [
  "semi",
  "indent",
  "quotes",
  "comma-dangle",
  "operator-linebreak",
  "space-before-blocks",
]) {
  assert.equal(
    base.rules[layout],
    undefined,
    layout + " is a layout rule; Prettier owns formatting",
  );
}

console.log("  ✓ Flat config blocks:", config.length);
console.log("  ✓ ECMAScript version:", base.languageOptions.ecmaVersion);
console.log("  ✓ Source type:", base.languageOptions.sourceType);
console.log("  ✓ Correctness rules:", Object.keys(base.rules).length);
console.log("  ✓ No layout rules: formatting is left to Prettier");
console.log("✅ eslint-config flat configuration validated.");
