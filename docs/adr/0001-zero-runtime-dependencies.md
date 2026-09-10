<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# 0001 — No runtime dependencies

## Status

Accepted.

## Context

A shareable configuration is installed by every project that adopts it, often in
CI, often transitively. Anything it depends on becomes a dependency of every
consumer, and every dependency is both a supply-chain surface and a version
conflict waiting to happen.

## Decision

The package declares no runtime dependencies unless the configuration itself
names a module a consumer must load — a shareable preset it extends, or a plugin
in a pipeline. In that case the module is a real `dependencies` entry, because a
configuration that names something a consumer cannot resolve is broken.

The tool being configured is a `peerDependencies` entry: the consumer chooses its
version, and pinning it here would be wrong.

## Consequences

Installing this package cannot pull in a tree of transitive code. The conformance
suite enforces the other half of the bargain: every package the configuration
names must resolve, so "no dependencies" can never quietly mean "broken for
consumers".

This rule is what the 0.0.7 release fixed in `semantic-release-config`, which
named six plugins and declared none of them.
