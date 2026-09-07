# `@sebastienrousseau/eslint-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/eslint-config`.

---

## Description
Shareable ESLint rules enforcing strict code quality, modern ES2024 idioms, and zero bugs.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/eslint-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. ES2024 & Node.js Environments
- **Description**: Configured for modern ECMAScript and Node.js runtimes
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Strict Equality
- **Description**: Enforces triple-equals `eqeqeq` across all comparisons
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Dead Code Prevention
- **Description**: Disallows unused variables (`no-unused-vars`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Console Cleanliness
- **Description**: Disables unformatted console statements in production
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Formatting Discipline
- **Description**: Enforces 2-space indentation, semicolons, and double quotes
- **Scope**: Production & Development
- **Status**: Stable & Active

