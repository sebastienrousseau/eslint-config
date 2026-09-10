// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom ESLint configuration override
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  rules: { ...base.rules, "no-console": "error" },
};
console.log("Custom no-console level:", custom.rules["no-console"]);
