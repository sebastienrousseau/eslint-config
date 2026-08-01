<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./eslint-config.svg" alt="eslint-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/eslint-config</h1>

<p align="center">
  Shareable ESLint configuration supporting both ESLint 9+ Flat Config and legacy formats.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/eslint-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/eslint-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/eslint-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Feslint-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/eslint-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/eslint-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/eslint-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Modern ECMAScript & Code Hygiene Rules](#modern-ecmascript-code-hygiene-rules) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

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

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/eslint-config.git
cd eslint-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
