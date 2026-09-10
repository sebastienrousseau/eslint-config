# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT

# POSIX-compatible Makefile for eslint-config.
# Works on macOS, Linux, and WSL without modification.
#
# Every target delegates to the same command CI runs, so `make all` passing
# locally and the pipeline passing mean the same thing. CI runs `make all`
# on every push for exactly that reason.

LINT_PATHS := index.cjs index.mjs index.js examples benches fuzz tests

.PHONY: all test lint format bench fuzz examples docs sbom clean

all:
	$(MAKE) test
	$(MAKE) lint

test:
	npm test

bench:
	npm run bench

fuzz:
	npm run fuzz

examples:
	npm run examples

docs:
	npm run docs:build

# The linters are CI tools, not dependencies of the published package, so
# they are installed without touching the manifest or the lockfile.
lint:
	npm install --no-save --no-audit --no-fund eslint@10.10.0 prettier@3.6.2 @sebastienrousseau/prettier-config
	npx eslint --no-config-lookup --config ./index.cjs --max-warnings 0 $(LINT_PATHS)
	npx prettier --config node_modules/@sebastienrousseau/prettier-config/index.cjs --check $(LINT_PATHS)

format:
	npm install --no-save --no-audit --no-fund prettier@3.6.2 @sebastienrousseau/prettier-config
	npx prettier --config node_modules/@sebastienrousseau/prettier-config/index.cjs --write $(LINT_PATHS)

sbom:
	npm sbom --sbom-format cyclonedx --omit dev > sbom.cdx.json
	@echo 'wrote sbom.cdx.json'

clean:
	rm -rf node_modules public sbom.cdx.json
