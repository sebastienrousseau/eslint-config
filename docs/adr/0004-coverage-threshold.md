<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# 0004 — Coverage threshold

## Status

Accepted.

## Context

This package is a few dozen lines of loader around a block of configuration data.
Line coverage over it is close to meaningless: the previous suite reported 100%
while the package shipped a declaration that contradicted its own runtime value.
A number that high, over a surface that small, measures nothing and discourages
asking what is actually verified.

## Decision

No line-coverage gate on this repository. The gate is the conformance suite: the
packaging, typing, resolvability, licensing, documentation and real-tool checks
in `@sebastienrousseau/config-kit`, every one of which has a test proving it can
fail.

Coverage is gated where it measures something — inside the kit itself, which is
real logic, at 90% lines / 75% branches / 85% functions. Those numbers are
deliberately below 100: the validator bodies only execute with a real tool
installed, which happens in the consuming repositories, not in the kit's own run.

## Consequences

"Tests pass" now means the package is installable, correctly typed, resolvable and
accepted by its tool — not that an interpreter visited some lines.
