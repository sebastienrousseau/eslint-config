const { describe, it } = require("node:test");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

describe("@sebastienrousseau/eslint-config Unit Tests", () => {
  it("should load CommonJS module successfully", () => {
    const config = require("../index.cjs");
    assert(config !== null && (typeof config === "object" || typeof config === "string"));
  });

  it("should load root index.js entrypoint successfully", () => {
    const config = require("../index.js");
    assert(config !== null && (typeof config === "object" || typeof config === "string"));
  });

  it("should load ESM module entrypoint successfully", async () => {
    const esm = await import("../index.mjs");
    assert(esm.default !== null && (typeof esm.default === "object" || typeof esm.default === "string"));
  });

  it("should have valid package.json metadata", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf8"));
    assert.strictEqual(pkg.name, "@sebastienrousseau/eslint-config");
    assert.strictEqual(pkg.license, "Apache-2.0 OR MIT");
    assert(pkg.version.length > 0);
  });

  it("should include TypeScript declarations file", () => {
    const dtsPath = path.join(__dirname, "../index.d.ts");
    assert(fs.existsSync(dtsPath));
    const content = fs.readFileSync(dtsPath, "utf8");
    assert(content.length > 0);
  });

  it("should export defined configuration properties", () => {
    const cjs = require("../index.cjs");
    if (typeof cjs === "string") {
      assert(cjs.length > 0);
    } else if (Array.isArray(cjs)) {
      assert(cjs.length > 0);
      assert(typeof cjs[0] === "string" || typeof cjs[0] === "object");
    } else {
      assert(Object.keys(cjs).length > 0);
    }
  });
});
