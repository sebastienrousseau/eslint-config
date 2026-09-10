// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * ESM entrypoint.
 *
 * The configuration is defined once, in `index.cjs`, and re-exported here so the
 * two module systems cannot drift apart. Node resolves a CommonJS default import
 * to `module.exports`, which is exactly the value consumers of the CJS entry get.
 */

import config from "./index.cjs";

export default config;
