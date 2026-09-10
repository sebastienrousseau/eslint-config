<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# 0005 — Flat config only

## Status

Accepted in 0.0.7. Supersedes the dual eslintrc/flat arrangement.

## Context

Until 0.0.7 this package exported two different things. `index.mjs` exported a
flat config array; `index.cjs` exported an eslintrc-shaped object with `env` and
`parserOptions`, served as `exports["./legacy"]`. A single `index.d.ts` declared
`Linter.Config[]` for both, so every TypeScript consumer of the CommonJS entry
was mistyped.

Worse, `peerDependencies` advertised `eslint >=8.0.0` while the package's own
devDependency was ESLint 10, which removed eslintrc support entirely. Loading
the legacy export on the newest supported version failed outright:

```text
A config object is using the "env" key, which is not supported in flat config.
```

## Decision

One flat config, exported from both entrypoints. `index.cjs` holds it; `index.mjs`
re-exports it. The `./legacy` export is removed and the peer range is `>=9.0.0`,
the first release where flat config is the default.

## Consequences

Breaking for anyone who imported `./legacy` or relied on the eslintrc object —
but that path was already broken on ESLint 10, so the break is in the declaration,
not in behaviour. Projects still on ESLint 8 should stay on 0.0.4.

The conformance suite now lints a clean fixture and a deliberately malformed one
through the real ESLint, so a configuration that is syntactically valid but
enforces nothing cannot pass.
