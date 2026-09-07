<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# Working on @sebastienrousseau/eslint-config with an AI agent

The invariants a contribution must respect, whether typed by a human
or generated with an assistant. `DEVELOPMENT.md` covers the how;
this file covers the rules that are easy for an agent to violate.

## Versioning and branches

- Releases increment strictly by **+0.0.1**. Never propose a 0.1.0 or
  1.0 jump.
- Work lands on a `feat/vX.Y.Z` branch named for the release it
  targets, sequenced by commits, never by more branches.
- Commit or stash everything (untracked files included) before any
  branch switch, and never `git add -A` after a switch without
  reading `git status` first.

## Quality gates

- CI must be green in the same session that turned it red.
- Every behaviour change lands with its test in the same commit; a
  regression fix lands with the input that found it.
- Run the local battery before pushing: `npm test` and `npm run lint` (or `make test`, `make lint`).

## Style

- Conventional commits; commits and tags are signed.
- No em dashes in drafted prose; public comments are short.
- Claims in docs must be verifiable: a channel, artefact, or number
  is only documented once it actually exists.

## Off-limits without explicit maintainer direction

- Force pushes, history rewrites, tag deletion or re-tagging.
- Publishing to any registry.
- Changing runtime engine requirements, package exports, or the public API surface.
