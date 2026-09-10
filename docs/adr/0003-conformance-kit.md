<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# 0003 — A shared conformance kit

## Status

Accepted.

## Context

Every repository in this family once carried its own copy of the same test suite.
Thirty-eight copies of two templates, asserting that a module loads and is an
object. They reported 100% coverage over files that are mostly literals, and they
missed every defect that actually shipped: declarations contradicting runtime
shapes, a plugin list no consumer could resolve, an export that was dead on the
tool version the package claimed to support.

One of those suites contained a shape-comparison test written as a chain of
conditions with no final branch. When the two entrypoints disagreed — the exact
thing it existed to detect — no branch matched and it passed, asserting nothing.

## Decision

The suite lives in `@sebastienrousseau/config-kit`, a development dependency. Each
repository's test file is one line that calls `runSuite`. Repository-specific
cases are added alongside that call, never instead of it.

The kit's own tests take a package that passes every gate, break exactly one
thing, and assert the suite fails with a message naming the problem. Every defect
from the 0.0.7 audit has such a test, so none of them can return silently.

## Consequences

A new gate is written once and applies everywhere on the next release. The cost is
a version coupling: a kit release that adds a gate will fail repositories that do
not yet satisfy it, which is the intended behaviour and why the kit is pinned by
range rather than floated.
