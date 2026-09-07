<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# Developing @sebastienrousseau/eslint-config

The single entry point for working on this repository. User-facing
documentation lives in the [README](README.md) and [`docs/`](docs/);
contribution etiquette and review expectations live in
[`CONTRIBUTING.md`](CONTRIBUTING.md). This file is the *how*: toolchain,
tasks, and reproducing every CI gate locally.

## Toolchain

| What | Version | Why |
| :--- | :--- | :--- |
| Node.js | >= 18.0.0 (LTS recommended) | Runtime engine |
| npm | >= 9.0.0 | Native package manager and task runner |
| make | any recent | Task runner by convention (`Makefile`) |

```bash
git clone https://github.com/sebastienrousseau/eslint-config
cd eslint-config
make            # test + lint — the default gate
```

## Task map

| Task | Command |
| :--- | :--- |
| Everything a PR needs first | `make` |
| Full test suite | `make test` |
| Lints / formatting | `make lint` / `make format` |
| Clean build artifacts | `make clean` |

## Reproducing CI gates locally

Run `make` before submitting a pull request. CI executes test and lint checks across supported platforms.

## Test layout

Tests reside in the `test/` directory and are executed via `npm test`.

## Release model

Versioning follows SemVer strictly incrementing by **+0.0.1** per release. All changes land via pull requests targeting the default branch.
