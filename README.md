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
  <a href="#minimum-toolchain-policy"><img src="https://img.shields.io/badge/node->=%2018.0.0-93450a.svg?style=for-the-badge&logo=node.js" alt="Node >= 18.0.0" /></a>
</p>

---

## Contents

**Getting started**

- [Install](#install) — npm, pnpm, yarn, bun, source
- [Requirements](#requirements) — runtime floor, platform support
- [Quick Start](#quick-start) — import and extend in seconds

**The configuration ecosystem**

- [The configuration ecosystem](#the-configuration-ecosystem) — `@sebastienrousseau/config` family map at a glance

**Configuration reference**

- [Why this approach?](#why-this-approach) — design rationale and engineering principles
- [Modern ECMAScript & Code Hygiene Rules](#modern-ecmascript--code-hygiene-rules) — before and after rule comparison
- [Module compatibility](#module-compatibility) — dual CJS/ESM exports and TypeScript declarations

**Operational**

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

- **Node.js 18.0.0 or newer.** Every package manifest declares `engines.node`, and CI enforces the runtime floor on every push across macOS, Linux, and Windows.
- **npm 9.0.0 or newer** (or modern pnpm / yarn / bun).
- **Module systems.** Full native support for ECMAScript Modules (ESM) and CommonJS (CJS).
- **TypeScript 5.0 or newer** (optional, recommended for type checking).

---

## Quick Start

### In `package.json`

```json
{
  "eslint": "@sebastienrousseau/eslint-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/eslint-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/eslint-config";
export default config;
```

---

## The configuration ecosystem

`@sebastienrousseau/eslint-config` is a focused satellite of the [`@sebastienrousseau/config`](https://github.com/sebastienrousseau/config) suite — a unified ecosystem of 21 single-purpose, zero-overhead developer configurations designed to share a single design philosophy, strict typing, and zero runtime dependencies.

| Configuration | Target / Purpose | Native Standard |
| :--- | :--- | :--- |
| [`@sebastienrousseau/biome-config`](https://github.com/sebastienrousseau/biome-config) | Rust-powered linting & formatting | Biome 1.9+ |
| [`@sebastienrousseau/browserslist-config`](https://github.com/sebastienrousseau/browserslist-config) | Target browser matrix | Browserslist 4+ |
| [`@sebastienrousseau/c8-config`](https://github.com/sebastienrousseau/c8-config) | V8 native code coverage thresholds | c8 / V8 |
| [`@sebastienrousseau/commitlint-config`](https://github.com/sebastienrousseau/commitlint-config) | Conventional Commits standard | Commitlint 19+ |
| [`@sebastienrousseau/docker-config`](https://github.com/sebastienrousseau/docker-config) | Multi-stage Docker hardening | Hadolint / BuildKit |
| [`@sebastienrousseau/eslint-config`](https://github.com/sebastienrousseau/eslint-config) | Strict ECMAScript & TypeScript linting | ESLint 9+ Flat Config |
| [`@sebastienrousseau/jsdoc-config`](https://github.com/sebastienrousseau/jsdoc-config) | Structured API documentation generation | JSDoc 4+ |
| [`@sebastienrousseau/knip-config`](https://github.com/sebastienrousseau/knip-config) | Unused files, exports & dependencies audit | Knip 5+ |
| [`@sebastienrousseau/lefthook-config`](https://github.com/sebastienrousseau/lefthook-config) | Fast, parallel Git hook automation | Lefthook 1.7+ |
| [`@sebastienrousseau/markdownlint-config`](https://github.com/sebastienrousseau/markdownlint-config) | Markdown document style & structure | markdownlint-cli2 |
| [`@sebastienrousseau/mocha-config`](https://github.com/sebastienrousseau/mocha-config) | BDD testing settings & reporting | Mocha 10+ |
| [`@sebastienrousseau/oxlint-config`](https://github.com/sebastienrousseau/oxlint-config) | Sub-millisecond Rust JavaScript linting | Oxlint |
| [`@sebastienrousseau/playwright-config`](https://github.com/sebastienrousseau/playwright-config) | Cross-browser end-to-end testing | Playwright 1.40+ |
| [`@sebastienrousseau/prettier-config`](https://github.com/sebastienrousseau/prettier-config) | Deterministic code formatting | Prettier 3+ |
| [`@sebastienrousseau/remark-config`](https://github.com/sebastienrousseau/remark-config) | AST-based markdown verification | Remark 13+ |
| [`@sebastienrousseau/semantic-release-config`](https://github.com/sebastienrousseau/semantic-release-config) | Tag-driven automated releases & changelogs | semantic-release 24+ |
| [`@sebastienrousseau/size-limit-config`](https://github.com/sebastienrousseau/size-limit-config) | Performance bundle budget enforcement | Size Limit 11+ |
| [`@sebastienrousseau/stylelint-config`](https://github.com/sebastienrousseau/stylelint-config) | Modern CSS & SCSS quality assurance | Stylelint 16+ |
| [`@sebastienrousseau/tailwindcss-config`](https://github.com/sebastienrousseau/tailwindcss-config) | Utility-first design tokens & typography | Tailwind CSS 4+ |
| [`@sebastienrousseau/tsconfig-config`](https://github.com/sebastienrousseau/tsconfig-config) | Strict type checking & modern module resolution | TypeScript 5+ |
| [`@sebastienrousseau/vitest-config`](https://github.com/sebastienrousseau/vitest-config) | Lightning-fast Vite-native unit testing | Vitest 2+ |

To adopt the complete suite with a single import, install the master meta-package:

```bash
npm install --save-dev @sebastienrousseau/config
```

---

## Why this approach?

Configuration rot is one of the most common vectors for project decay. Ad-hoc tool configurations copied between repositories quickly drift, leaving security vulnerabilities unpatched, formatting rules inconsistent, and CI times bloated.

`@sebastienrousseau/eslint-config` solves this with three deliberate engineering choices:

1. **Zero Runtime Dependencies**: The configuration contains only static, serialisable declarative definitions and clean programmatic adapters.
2. **Dual CJS/ESM Architecture**: Ships dedicated CommonJS (`index.cjs`) and ES Module (`index.mjs`) entrypoints alongside comprehensive TypeScript declarations (`index.d.ts`).
3. **Deterministic Governance**: Versioned strictly by `+0.0.1` per release, cryptographically signed with published PGP keys, and audited continuously.

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

When locked into legacy ESLint 7 environments unable to adopt modern ECMAScript standards or the Flat Config format.

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

- **Private Reporting**: Report security vulnerabilities by emailing **sebastian.rousseau@gmail.com**. Expect an initial response within 48 hours and a mitigation plan within 7 days.
- **Commit Integrity**: All commits on `main` and release tags are cryptographically signed.
- **Release Signing Key**: The release-signing PGP key is published in [`KEYS.asc`](KEYS.asc):
  ```text
  4B7F16C909C7A8EE9BED338A4F047EDF5F90F638
  ```
  Signing key `Sebastien Rousseau <sebastian.rousseau@gmail.com>`, ed25519, expires 2028-08-16.
- **Supply Chain**: Monitored continuously via Dependabot, CodeQL, and SLSA provenance. See [`SECURITY.md`](SECURITY.md) for details.

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

The minimum supported Node.js version is **18.0.0**. The floor may raise only when:

1. An upstream LTS version reaches official End-of-Life (EOL).
2. The reason is explicitly recorded in `CHANGELOG.md` and `DEVELOPMENT.md`.

---

## License

Dual-licensed under either:

- **Apache License, Version 2.0** ([`LICENSE-APACHE`](LICENSE-APACHE))
- **MIT License** ([`LICENSE-MIT`](LICENSE-MIT))

at your option.

`SPDX-License-Identifier: Apache-2.0 OR MIT`
