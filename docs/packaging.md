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

-  `index.cjs` — the configuration, defined once
-  `index.mjs` — an ESM re-export of `index.cjs`, so both module systems return
  the identical value
-  `index.js` — legacy `main` entrypoint, an alias of `index.cjs`
-  `index.d.ts` — the TypeScript declaration, asserted against the runtime shape in CI

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

Commits are signed. **Release tags are not yet signed** — the 0.0.7 tags are
lightweight tags created by the release tooling, so `git tag -v` will tell you
there is nothing to verify. Signed annotated tags begin at 0.0.8; until then,
verify the published artefact with `npm audit signatures` above rather than the
tag. The signing key is [KEYS.asc](../KEYS.asc).

## Distribution packaging

Ready-to-use sources live in [`pkg/`](../pkg), one directory per format:

| Format | Path | Installs to |
| :----- | :--- | :---------- |
| Debian | [`pkg/deb/`](../pkg/deb) | `/usr/share/nodejs/@sebastienrousseau/eslint-config/` |
| RPM | [`pkg/rpm/`](../pkg/rpm) | `/usr/lib/node_modules/@sebastienrousseau/eslint-config/` |
| Arch | [`pkg/aur/PKGBUILD`](../pkg/aur/PKGBUILD) | `/usr/lib/node_modules/@sebastienrousseau/eslint-config/` |
| Homebrew | [`pkg/brew/eslint-config.rb`](../pkg/brew/eslint-config.rb) | formula cellar |
| Nix | [`pkg/nix/flake.nix`](../pkg/nix/flake.nix) | `$out/lib/node_modules/@sebastienrousseau/eslint-config/` |

Both Linux paths are the ones the respective distribution's `nodejs` package
adds to the module search path, so an installed package is resolvable by
`require()` with no further wiring. CI builds the deb and the rpm on every
push and asserts the files land where this table says.

To build the Debian package, copy `pkg/deb` to `debian/` at the repository
root and run `dpkg-buildpackage -us -uc -b`.

### A note on module resolution

`NODE_PATH` is a CommonJS-only mechanism — Node's ESM resolver ignores it. The
installed package is reachable by `require()` through
`NODE_PATH=/usr/share/nodejs`, but **not** by `import` the same way. Expose it
as a project would, by symlinking into the consuming project's
`node_modules`, which works for both module systems:

```sh
mkdir -p node_modules/@sebastienrousseau
ln -s /usr/share/nodejs/@sebastienrousseau/<name> node_modules/@sebastienrousseau/<name>
```

CI installs the built package and loads it both ways, so this is tested rather
than assumed.

## Reproducible builds

`npm pack` is byte-for-byte reproducible for this package: two runs from the
same tree produce tarballs with identical SHA-256 sums. CI packs twice and
compares on every push, so the claim is a gate rather than an assertion.

This is not a statement about the distribution packages, which inherit their
respective toolchains' reproducibility.

## Decisions taken deliberately

Three things the packaging checklist asks for are **intentionally absent**, and
the reasoning is recorded here rather than left as an unexplained gap:

- **No container image.** The package is inert configuration consumed at build time by a tool running on the host. A container would ship a filesystem nobody executes.
- **No C-FFI surface.** There is no callable API — the package exports a data object. A cdylib would export nothing meaningful.
- **No Repology badge yet.** Repology tracks a project once distributions do. The badge goes in the README when at least two distributions carry the package, not before; a badge for nothing is noise.

## Security contact

See [SECURITY.md](../SECURITY.md) for the private reporting channel and response
expectations.
