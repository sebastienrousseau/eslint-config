const { describe, it } = require("node:test");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

describe("@sebastienrousseau/eslint-config Unit Tests", () => {
  it("should load CommonJS module successfully", () => {
    const config = require("../index.cjs");
    assert(config !== null && (typeof config === "object" || typeof config === "string"));
  });

  it("should have valid package.json metadata", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf8"));
    assert.strictEqual(pkg.name, "@sebastienrousseau/eslint-config");
    assert.strictEqual(pkg.license, "Apache-2.0 OR MIT");
    assert(pkg.version.length > 0);
  });

  it("should include TypeScript declarations file", () => {
    assert(fs.existsSync(path.join(__dirname, "../index.d.ts")));
  });
});

// Auto-run if executed directly
if (require.main === module) {
  const config = require("../index.cjs");
  assert(config !== null && (typeof config === "object" || typeof config === "string"));
  console.log("✅ Unit tests passed.");
}
