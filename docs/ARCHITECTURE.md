# `@sebastienrousseau/eslint-config` Architecture

How the project is put together, for contributors. The user-facing documentation lives in the [README](../README.md); this page describes the internal organization and design decisions.

## Project Overview

Shareable ESLint configuration adhering to modern JS/TS and 2026 standards

## Directory Structure

```text
eslint-config/
├── .editorconfig
├── .github/
├── AGENTS.md
├── CHANGELOG.md
├── CITATION.cff
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── DEVELOPMENT.md
├── GOVERNANCE.md
├── KEYS.asc
├── LICENSE
├── LICENSE-APACHE
├── LICENSE-MIT
├── Makefile
├── README.md
├── SECURITY.md
├── SUPPORT.md
├── docs/
│   └── ARCHITECTURE.md
└── package.json
```

## Key Invariants

1. **Strict Versioning**: Releases increment strictly by `+0.0.1` following the repository lifecycle standard.
2. **Dual Licensing**: The project is dual-licensed under Apache-2.0 OR MIT.
3. **Commit Integrity**: Commits and release tags are signed with GPG/PGP key published in `KEYS.asc`.
