// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

"use strict";

/**
 * Conformance suite for @sebastienrousseau/eslint-config.
 *
 * The whole suite lives in @sebastienrousseau/config-kit so that all packages in
 * the family are held to one standard that cannot drift between repositories.
 * It checks packaging, declared types against runtime shapes, dependency
 * resolvability, tarball contents, licensing, version coherence, documentation
 * links, and hands the configuration to its real tool where one exists.
 *
 * Add repository-specific cases below the call, not instead of it.
 */

require("@sebastienrousseau/config-kit").runSuite({ root: __dirname + "/.." });
