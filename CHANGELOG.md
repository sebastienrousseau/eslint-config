# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.7] - 2026-09-10

### Added

- `engines.node` declaring the supported floor. The README and its badge advertised
  a floor that no manifest stated; CI now proves it across Node 20, 22, 24 on
  Linux, macOS and Windows.
- Shared conformance suite via `@sebastienrousseau/config-kit`, replacing the
  per-repository boilerplate. It checks packaging, declared types against runtime
  shapes, dependency resolvability, tarball contents, licence headers, version
  coherence and documentation links.
- `.github/CODEOWNERS`, `.pre-commit-config.yaml`, `docs/packaging.md` and
  `docs/adr/` architecture decision records.
- `sideEffects: false`, so bundlers can drop the package when it is unused.

### Changed

- `index.mjs` now re-exports `index.cjs` instead of duplicating it, which makes the
  two entrypoints identical by construction.
- CI, publish, security and docs workflows are thin callers of reusable workflows in
  `sebastienrousseau/config`, so a gate added once applies to the whole family.
- The release pipeline no longer marks the npm publish step `continue-on-error`; a
  failed publish now fails the job instead of reporting green.

### Fixed

- `index.d.ts` is asserted against the runtime export shape in CI.
- **Breaking.** Removed the `./legacy` eslintrc export and unified both entrypoints
  on flat config. The eslintrc export could not load on ESLint 10, which the package
  claimed to support, and `index.d.ts` declared `Linter.Config[]` for a CommonJS entry
  that returned an object. `peerDependencies` is now `eslint >=9.0.0`. See
  [ADR 0005](./docs/adr/0005-flat-config-only.md).
- Corrected the OpenSSF Best Practices badge, which pointed at another project.
- Removed fifteen deprecated `layout` rules (`semi`, `indent`, `quotes`,
  `comma-dangle`, `operator-linebreak` and the rest). ESLint deprecated them and
  moved them to @stylistic, so they were on the way out; they also contradicted
  `@sebastienrousseau/prettier-config`, which this family tells you to pair with
  this package, making the documented combination unsatisfiable. Nine correctness
  rules remain. Formatting is Prettier's job.

## [0.0.4] - 2026-09-07

### Added
- Repository Gold Standard compliance files (`AGENTS.md`, `DEVELOPMENT.md`, `GOVERNANCE.md`, `SUPPORT.md`, `CITATION.cff`, `KEYS.asc`, `Makefile`).
- Architecture documentation in `docs/ARCHITECTURE.md`.
- Dual licensing under Apache-2.0 OR MIT terms.
