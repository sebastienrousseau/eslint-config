<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

<p align="center">
  <img src="./eslint-config.svg" alt="eslint-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/eslint-config</h1>

<p align="center">
  Shareable ESLint configuration adhering to modern JS/TS and 2026 standards
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/eslint-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/eslint-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/eslint-config"><img src="https://img.shields.io/npm/v/%40sebastienrousseau%2Feslint-config.svg?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://sebastienrousseau.com/eslint-config/"><img src="https://img.shields.io/badge/docs-sebastienrousseau.com-brightgreen.svg?style=for-the-badge&logo=github" alt="Documentation" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/eslint-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/eslint-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://www.bestpractices.dev/projects/14524"><img src="https://img.shields.io/cii/level/14524?style=for-the-badge&label=OpenSSF%20Best%20Practices&logo=openssf" alt="OpenSSF Best Practices" /></a>
  <a href="LICENSE-APACHE"><img src="https://img.shields.io/badge/license-Apache--2.0%20OR%20MIT-blue.svg?style=for-the-badge" alt="License: Apache-2.0 OR MIT" /></a>
  <a href="#minimum-toolchain-policy"><img src="https://img.shields.io/badge/node->=%2020.0.0-93450a.svg?style=for-the-badge&logo=node.js" alt="Node >= 20.0.0" /></a>
</p>

---

## Contents

### Getting started

- [Install](#install) — npm, pnpm, yarn, bun, source
- [Requirements](#requirements) — runtime floor, platform support
- [Quick Start](#quick-start) — import and extend in seconds

### Ecosystem

- [The configuration ecosystem](#the-configuration-ecosystem) — `@sebastienrousseau/config` family map at a glance

### Configuration reference

- [Why this approach?](#why-this-approach) — design rationale and engineering principles
- [Modern ECMAScript & Code Hygiene Rules](#modern-ecmascript--code-hygiene-rules) — before and after rule comparison
- [Module compatibility](#module-compatibility) — dual CJS/ESM exports and TypeScript declarations

### Operational

- [When not to use this configuration](#when-not-to-use-this-configuration) — boundaries and limitations
- [Development](#development) — make targets, validation, test suite
- [Security](#security) — supply chain, audit policies, commit integrity
- [Documentation](#documentation) — all reference docs
- [Stability guarantees](#stability-guarantees) — SemVer axis, deprecation window
- [Minimum-toolchain policy](#minimum-toolchain-policy) — runtime floor guarantees
- [License](#license) — dual license terms

---

## Install

### Using a package manager

Install `@sebastienrousseau/eslint-config` as a development dependency:

```bash
# npm
npm install --save-dev @sebastienrousseau/eslint-config

# pnpm
pnpm add -D @sebastienrousseau/eslint-config

# yarn
yarn add -D @sebastienrousseau/eslint-config

# bun
bun add -d @sebastienrousseau/eslint-config
```

### Build from source

```bash
git clone https://github.com/sebastienrousseau/eslint-config.git
cd eslint-config
make            # check + test
```

---

## Requirements

- **Node.js 20.0.0 or newer.** Declared in `engines.node` and proved on every push: the CI matrix runs Node 20, 22, 24 on Linux, macOS and Windows, and fails if the matrix floor and `engines.node` disagree.
- **npm 9.0.0 or newer** (or modern pnpm / yarn / bun).
- **Module systems.** Full native support for ECMAScript Modules (ESM) and CommonJS (CJS).
- **TypeScript 5.0 or newer** (optional, recommended for type checking).

---

## Quick Start

ESLint 9+ reads a flat config from `eslint.config.js`.

### eslint.config.js (ESM)

```js
export { default } from "@sebastienrousseau/eslint-config";
```

### eslint.config.cjs (CommonJS)

```js
module.exports = require("@sebastienrousseau/eslint-config");
```

### Extending it

```js
import base from "@sebastienrousseau/eslint-config";

export default [
  ...base,
  {
    rules: {
      "no-console": "error",
    },
  },
];
```

---

## The configuration ecosystem

`@sebastienrousseau/eslint-config` is a focused satellite of the [`@sebastienrousseau/config`](https://github.com/sebastienrousseau/config) suite — a unified ecosystem of 21 single-purpose, zero-overhead developer configurations designed to share a single design philosophy, strict typing, and zero runtime dependencies.

| Configuration | Target / Purpose | Native Standard |
| :--- | :--- | :--- |
| [`@sebastienrousseau/biome-config`](https://github.com/sebastienrousseau/biome-config) | Rust-powered linting & formatting | Biome 1.9+ |
| [`@sebastienrousseau/browserslist-config`](https://github.com/sebastienrousseau/browserslist-config) | Target browser matrix | Browserslist 4+ |
| [`@sebastienrousseau/c-config`](https://github.com/sebastienrousseau/c-config) | Modern C23 clang-format and clang-tidy rules | Clang 18+ / C23 |
| [`@sebastienrousseau/c8-config`](https://github.com/sebastienrousseau/c8-config) | V8 native code coverage thresholds | c8 / V8 |
| [`@sebastienrousseau/commitlint-config`](https://github.com/sebastienrousseau/commitlint-config) | Conventional Commits standard | Commitlint 19+ |
| [`@sebastienrousseau/cpp-config`](https://github.com/sebastienrousseau/cpp-config) | Modern C++23 clang-format, tidy & cmake rules | Clang 18+ / C++23 |
| [`@sebastienrousseau/csharp-config`](https://github.com/sebastienrousseau/csharp-config) | C# Roslyn analyzers and OmniSharp rules | .NET 8/9 / Roslyn |
| [`@sebastienrousseau/dart-config`](https://github.com/sebastienrousseau/dart-config) | Dart and Flutter analysis_options presets | Dart 3.x / Flutter |
| [`@sebastienrousseau/docker-config`](https://github.com/sebastienrousseau/docker-config) | Multi-stage Docker hardening | Hadolint / BuildKit |
| [`@sebastienrousseau/eslint-config`](https://github.com/sebastienrousseau/eslint-config) | Strict ECMAScript & TypeScript linting | ESLint 9+ Flat Config |
| [`@sebastienrousseau/go-config`](https://github.com/sebastienrousseau/go-config) | Golangci-lint, staticcheck, and revive rules | Go 1.22+ / golangci-lint |
| [`@sebastienrousseau/java-config`](https://github.com/sebastienrousseau/java-config) | Checkstyle, SpotBugs, and PMD rulesets | Java 21+ / Checkstyle |
| [`@sebastienrousseau/jsdoc-config`](https://github.com/sebastienrousseau/jsdoc-config) | Structured API documentation generation | JSDoc 4+ |
| [`@sebastienrousseau/knip-config`](https://github.com/sebastienrousseau/knip-config) | Unused files, exports & dependencies audit | Knip 5+ |
| [`@sebastienrousseau/kotlin-config`](https://github.com/sebastienrousseau/kotlin-config) | Official ktlint formatting and Detekt analysis | Kotlin 2.0+ / Detekt |
| [`@sebastienrousseau/lefthook-config`](https://github.com/sebastienrousseau/lefthook-config) | Fast, parallel Git hook automation | Lefthook 1.7+ |
| [`@sebastienrousseau/lua-config`](https://github.com/sebastienrousseau/lua-config) | Lua 5.4, Neovim LuaCheck and StyLua presets | Lua 5.4 / StyLua |
| [`@sebastienrousseau/markdownlint-config`](https://github.com/sebastienrousseau/markdownlint-config) | Markdown document style & structure | markdownlint-cli2 |
| [`@sebastienrousseau/mocha-config`](https://github.com/sebastienrousseau/mocha-config) | BDD testing settings & reporting | Mocha 10+ |
| [`@sebastienrousseau/oxlint-config`](https://github.com/sebastienrousseau/oxlint-config) | Sub-millisecond Rust JavaScript linting | Oxlint |
| [`@sebastienrousseau/php-config`](https://github.com/sebastienrousseau/php-config) | PER-CS 2.0, PSR-12 and Level 8 PHPStan | PHP 8.3+ / PHPStan |
| [`@sebastienrousseau/playwright-config`](https://github.com/sebastienrousseau/playwright-config) | Cross-browser end-to-end testing | Playwright 1.40+ |
| [`@sebastienrousseau/prettier-config`](https://github.com/sebastienrousseau/prettier-config) | Deterministic code formatting | Prettier 3+ |
| [`@sebastienrousseau/python-config`](https://github.com/sebastienrousseau/python-config) | Hardened Ruff, Black, Flake8, and MyPy rules | Python 3.12+ / Ruff |
| [`@sebastienrousseau/r-config`](https://github.com/sebastienrousseau/r-config) | Lintr and styler presets for data science | R 4.3+ / lintr |
| [`@sebastienrousseau/remark-config`](https://github.com/sebastienrousseau/remark-config) | AST-based markdown verification | Remark 13+ |
| [`@sebastienrousseau/ruby-config`](https://github.com/sebastienrousseau/ruby-config) | RuboCop and StandardRB rules for Ruby 3.3+ | Ruby 3.3+ / RuboCop |
| [`@sebastienrousseau/rust-config`](https://github.com/sebastienrousseau/rust-config) | Hardened rustfmt formatting and Clippy lints | Rust 2021 / Clippy |
| [`@sebastienrousseau/semantic-release-config`](https://github.com/sebastienrousseau/semantic-release-config) | Tag-driven automated releases & changelogs | semantic-release 24+ |
| [`@sebastienrousseau/shell-config`](https://github.com/sebastienrousseau/shell-config) | Strict ShellCheck static analysis & shfmt presets | POSIX / Bash / ShellCheck |
| [`@sebastienrousseau/size-limit-config`](https://github.com/sebastienrousseau/size-limit-config) | Performance bundle budget enforcement | Size Limit 11+ |
| [`@sebastienrousseau/sql-config`](https://github.com/sebastienrousseau/sql-config) | Dialect-aware SQLFluff linting & formatting | SQLFluff / ANSI SQL |
| [`@sebastienrousseau/stylelint-config`](https://github.com/sebastienrousseau/stylelint-config) | Modern CSS & SCSS quality assurance | Stylelint 16+ |
| [`@sebastienrousseau/swift-config`](https://github.com/sebastienrousseau/swift-config) | Strict SwiftLint rules & SwiftFormat presets | Swift 5.10 / SwiftLint |
| [`@sebastienrousseau/tailwindcss-config`](https://github.com/sebastienrousseau/tailwindcss-config) | Utility-first design tokens & typography | Tailwind CSS 4+ |
| [`@sebastienrousseau/tsconfig-config`](https://github.com/sebastienrousseau/tsconfig-config) | Strict type checking & modern module resolution | TypeScript 5+ |
| [`@sebastienrousseau/vitest-config`](https://github.com/sebastienrousseau/vitest-config) | Lightning-fast Vite-native unit testing | Vitest 2+ |
| [`@sebastienrousseau/zig-config`](https://github.com/sebastienrousseau/zig-config) | Hardened ZLS and build formatting rules | Zig 0.13+ / ZLS |

To adopt the complete suite with a single import, install the master meta-package:

```bash
npm install --save-dev @sebastienrousseau/config
```

---

## Why this approach?

Configuration rot is one of the most common vectors for project decay. Ad-hoc tool configurations copied between repositories quickly drift, leaving security vulnerabilities unpatched, formatting rules inconsistent, and CI times bloated.

`@sebastienrousseau/eslint-config` solves this with three deliberate engineering choices:

1.  **Zero Runtime Dependencies**: The configuration contains only static, serialisable declarative definitions and clean programmatic adapters.
1.  **Dual CJS/ESM Architecture**: Ships dedicated CommonJS (`index.cjs`) and ES Module (`index.mjs`) entrypoints alongside comprehensive TypeScript declarations (`index.d.ts`).
1.  **Deterministic Governance**: Versioned strictly by `+0.0.1` per release, cryptographically signed with published PGP keys, and audited continuously.

---

## Modern ECMAScript & Code Hygiene Rules

Enforces strict equality, consistent quote style, whitespace formatting, and unused variable detection.

### Before (Unstandardized)

```javascript
// Unformatted legacy JS with loose checks
var x = "hello";
if (x == 'hello') console.log(x)
```

### After (@sebastienrousseau/eslint-config Enforced)

```javascript
// @sebastienrousseau/eslint-config enforced style
const x = "hello";
if (x === "hello") {
  // Clean & structured
}
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript declarations (`index.d.ts`) are included out of the box, providing rich IDE autocomplete and JSDoc documentation inline.

---

## When not to use this configuration

When you are still on ESLint 8 or earlier. This package is flat-config only from 0.0.7 (see [ADR 0005](./docs/adr/0005-flat-config-only.md)); stay on 0.0.4 for eslintrc support.

---

## Development

Contributors use a standard POSIX `Makefile` as the convention-based task runner:

| Task | Command | Purpose |
| :--- | :--- | :--- |
| Default gate | `make` | Runs full test and lint battery |
| Unit tests | `make test` | Executes native validation test suite |
| Lints | `make lint` | Runs syntax and code quality checks |
| Clean | `make clean` | Removes node_modules and temporary cache |

```bash
git clone https://github.com/sebastienrousseau/eslint-config.git
cd eslint-config
make test
```

---

## Security

- **Private Reporting**: Report security vulnerabilities by emailing **<sebastian.rousseau@gmail.com>**. Expect an initial response within 48 hours and a mitigation plan within 7 days.
- **Commit Integrity**: All commits on `main` and release tags are cryptographically signed.
- **Release Signing Key**: The release-signing PGP key is published in [`KEYS.asc`](KEYS.asc).
- **Supply Chain**: Monitored continuously via Dependabot, CodeQL, and SLSA provenance. See [`SECURITY.md`](SECURITY.md) for details.

```text
4B7F16C909C7A8EE9BED338A4F047EDF5F90F638
```

Signing key `Sebastien Rousseau <sebastian.rousseau@gmail.com>`, ed25519, expires 2028-08-16.

---

## Documentation

- **[Architecture](docs/ARCHITECTURE.md)** — Architectural design, directory structure, and invariants.
- **[Development Guide](DEVELOPMENT.md)** — Toolchain prerequisites, task reproduction, and CI gates.
- **[Governance](GOVERNANCE.md)** — Maintainer-led project model and decision-making framework.
- **[Support Guide](SUPPORT.md)** — Channels for help, bug reports, and feature requests.
- **[Ecosystem Suite](https://github.com/sebastienrousseau/config)** — The `@sebastienrousseau/config` family repository.

---

## Stability guarantees

- **SemVer Discipline**: Versioning increments strictly by `+0.0.1` following the repository lifecycle standard.
- **Output Stability**: A rule change that alters linting or formatting output in consumer code is treated as a notable breaking event, clearly documented in [`CHANGELOG.md`](CHANGELOG.md).
- **Deprecation Window**: Deprecated options or configurations remain supported for at least two release cycles before removal.

---

## Minimum-toolchain policy

The minimum supported Node.js version is **20.0.0**. The floor may raise only when:

1.  An upstream LTS version reaches official End-of-Life (EOL).
1.  The reason is explicitly recorded in `CHANGELOG.md` and `DEVELOPMENT.md`.

---

## License

Dual-licensed under either:

- **Apache License, Version 2.0** ([`LICENSE-APACHE`](LICENSE-APACHE))
- **MIT License** ([`LICENSE-MIT`](LICENSE-MIT))

at your option.

`SPDX-License-Identifier: Apache-2.0 OR MIT`
