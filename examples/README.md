# `@sebastienrousseau/eslint-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/eslint-config`.

---

## Example Suite Overview

| File | Type | Feature Coverage | Command |
| :--- | :--- | :--- | :--- |
| [`basic.js`](./basic.js) | CommonJS | Standard default configuration import | `node examples/basic.js` |
| [`advanced.js`](./advanced.js) | CommonJS | Custom extension and rule overrides | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs) | ES Module | Native ESM consumption via `import` | `node examples/esm.mjs` |
| [`features.js`](./features.js) | CommonJS | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **ES2024 & Node.js Environments**: Configured for modern ECMAScript and Node.js runtimes
- [x] **Strict Equality**: Enforces triple-equals `eqeqeq` across all comparisons
- [x] **Dead Code Prevention**: Disallows unused variables (`no-unused-vars`)
- [x] **Console Cleanliness**: Disables unformatted console statements in production
- [x] **Formatting Discipline**: Enforces 2-space indentation, semicolons, and double quotes
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
