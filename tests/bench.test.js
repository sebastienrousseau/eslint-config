const { describe, it } = require("node:test");
const assert = require("assert");
const { runBenchmark, printBenchmark } = require("../benches/bench_load.js");

describe("@sebastienrousseau/eslint-config Benchmark Tests", () => {
  it("should benchmark configuration loading latency and memory", () => {
    const res = runBenchmark(20);
    assert.strictEqual(res.iterations, 20);
    assert(typeof res.totalDurationMs === "number" && res.totalDurationMs >= 0);
    assert(typeof res.avgLoadMs === "number" && res.avgLoadMs >= 0);
    assert(typeof res.memDeltaKb === "number");
  });

  it("should print formatted benchmark results", () => {
    const { res, output } = printBenchmark(10);
    assert.strictEqual(res.iterations, 10);
    assert(output.includes("Benchmark: 10 loads"));
    assert(output.includes("Average load time:"));
    assert(output.includes("Memory delta:"));
  });

  it("should execute CLI benchmark runner directly", () => {
    const { execSync } = require("child_process");
    const path = require("path");
    const stdout = execSync(`node "${path.join(__dirname, "../benches/bench_load.js")}"`, {
      encoding: "utf8",
    });
    assert(stdout.includes("Benchmark: 500 loads"));
  });
});
