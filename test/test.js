const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/eslint-config...");

  // Test CJS config export structure
  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert(cjsConfig.rules && typeof cjsConfig.rules === "object", "CJS config must contain rules");
  assert.strictEqual(cjsConfig.rules.semi[0], "error");

  // Test ESM config import dynamically
  const esmModule = await import("../index.mjs");
  const esmConfig = esmModule.default;
  assert(Array.isArray(esmConfig), "Flat config export must be an array");
  assert(esmConfig[0].rules && typeof esmConfig[0].rules === "object", "Flat config item must contain rules");

  console.log("✅ eslint-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
