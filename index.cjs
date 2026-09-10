// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

"use strict";

/**
 * Modern ESLint flat configuration (ESLint 9+).
 *
 * Exported as a flat config array from both entrypoints. Two things changed in
 * 0.0.7, both because the previous configuration could not work on the ESLint
 * versions this package claims to support:
 *
 *  1. The eslintrc-format export is gone. ESLint 10 dropped eslintrc support
 *     entirely, so `exports["./legacy"]` failed outright on the newest
 *     supported version. See docs/adr/0005-flat-config-only.md.
 *
 *  2. Formatting rules are gone. Fifteen of the twenty-four rules this config
 *     used to set were `layout` rules that ESLint has deprecated and moved to
 *     @stylistic; they are slated for removal, exactly as Stylelint removed its
 *     equivalents. They also contradicted @sebastienrousseau/prettier-config —
 *     `operator-linebreak: after` against Prettier's leading `?`/`:` — so the
 *     two packages this family tells you to pair could not both be satisfied.
 *
 * What remains are rules about correctness and intent, which is the half ESLint
 * still owns. Formatting is Prettier's job: pair this with
 * @sebastienrousseau/prettier-config.
 *
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
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
      // Naming and intent.
      camelcase: ["warn", { properties: "always" }],

      // Structure that changes meaning, not just appearance.
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "no-multi-str": "error",

      // Real defects.
      "no-irregular-whitespace": "error",
      "no-unexpected-multiline": "error",
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true },
      ],

      // Left to the consumer: libraries and CLIs disagree about this one.
      "no-console": "off",
    },
  },
];
