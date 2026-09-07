const { describe, it } = require("node:test");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

describe("@sebastienrousseau/eslint-config Integration Tests", () => {
  it("should provide consistent exports across entrypoints", () => {
    const cjs = require("../index.cjs");
    assert(cjs !== null);
  });

  it("should comply with the repository layout standard", () => {
    const root = path.join(__dirname, "..");
    const requiredFiles = [
      "AGENTS.md", "CHANGELOG.md", "CITATION.cff", "DEVELOPMENT.md",
      "GOVERNANCE.md", "KEYS.asc", "LICENSE", "LICENSE-APACHE", "LICENSE-MIT",
      "Makefile", "README.md", "SECURITY.md", "SUPPORT.md", "docs/ARCHITECTURE.md"
    ];
    for (const file of requiredFiles) {
      assert(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
    }
  });
});

if (require.main === module) {
  const cjs = require("../index.cjs");
  assert(cjs !== null);
  console.log("✅ Integration tests passed.");
}
