<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# Packaging @sebastienrousseau/eslint-config

Notes for distribution maintainers. If something here is unclear or wrong for
your distribution, open an issue: packaging problems are treated as bugs.

## Licence grant

Dual-licensed, at your option, under **Apache-2.0 OR MIT**. Both full texts ship
in the repository and in the published tarball as [LICENSE-APACHE](../LICENSE-APACHE)
and [LICENSE-MIT](../LICENSE-MIT). Every source file carries an SPDX identifier,
so the grant is machine-readable without parsing prose.

## What the package contains

- `index.cjs` — the configuration, defined once
- `index.mjs` — an ESM re-export of `index.cjs`, so both module systems return
  the identical value
- `index.js` — legacy `main` entrypoint, an alias of `index.cjs`
- `index.d.ts` — the TypeScript declaration, asserted against the runtime shape in CI

The published tarball is an allowlist (`files` in `package.json`), verified in CI
against `npm pack`: every exported path and every preset must be present, and no
test, benchmark or website material may leak in.

## Dependency model

**No runtime dependencies.** The package is inert data plus a loader, which keeps
it safe to install anywhere and trivial to vendor.

Peer dependency: `eslint >=9.0.0`.
The tool being configured is the consumer's choice of version, so it is a peer
rather than a hard dependency.

Lockfile (`package-lock.json`) is committed, and CI installs with `npm ci` so the
dependency graph used to test a release is the graph that was reviewed.

## Minimum toolchain

Node 20 or newer, declared in `engines.node` and proved by the CI matrix,
which runs Node 20, 22, 24 on Linux, macOS and Windows. The floor
rises only in a minor release, and the reason is recorded in [the changelog](../CHANGELOG.md).

## Building and testing offline

```sh
npm ci --offline      # install the reviewed graph
npm test              # the full conformance suite
```

The suite needs no network access. It does shell out to `npm pack --dry-run` to
verify tarball contents, which works offline.

## Signature verification

Releases are published with npm provenance (a signed SLSA attestation linking the
tarball to the workflow run that built it). Verify with:

```sh
npm audit signatures
```

Git tags are signed; the public key is [KEYS.asc](../KEYS.asc).

## Security contact

See [SECURITY.md](../SECURITY.md) for the private reporting channel and response
expectations.
