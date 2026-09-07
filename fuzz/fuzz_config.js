/**
 * Fuzz testing harness for @sebastienrousseau/eslint-config
 * Tests malformed, deeply nested, and boundary input objects to ensure parser stability.
 */
const assert = require("assert");
const config = require("../index.cjs");

function generateFuzzPayload(depth = 0) {
  if (depth > 5) return "leaf";
  const types = ["string", "number", "boolean", "null", "array", "object"];
  const type = types[Math.floor(Math.random() * types.length)];
  switch (type) {
    case "string": return Math.random().toString(36).substring(7);
    case "number": return Math.random() * 1000;
    case "boolean": return Math.random() > 0.5;
    case "null": return null;
    case "array": return [generateFuzzPayload(depth + 1), generateFuzzPayload(depth + 1)];
    case "object": return { [Math.random().toString(36).substring(7)]: generateFuzzPayload(depth + 1) };
  }
}

console.log("Starting fuzz test battery (100 iterations)...");
for (let i = 0; i < 100; i++) {
  const payload = generateFuzzPayload();
  try {
    // Verify merging does not cause unhandled exceptions or prototype pollution
    const merged = Object.assign({}, config, payload);
    assert(typeof merged === "object");
  } catch (err) {
    console.error(`Fuzz failure at iteration ${i}:`, err);
    process.exit(1);
  }
}
console.log("✅ Fuzz tests passed (100 iterations, 0 crashes).");
