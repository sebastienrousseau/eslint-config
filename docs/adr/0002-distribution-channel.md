<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# 0002 — Distribution channel

## Status

Accepted.

## Context

The tool this package configures is itself installed from npm, so npm is the
channel its users already have.

## Decision

Publish to npm alongside the tool it configures.

## Consequences

Nothing unusual; the package behaves like any other shareable configuration.
