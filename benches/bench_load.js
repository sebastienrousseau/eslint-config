/**
 * Benchmark runner for @sebastienrousseau/eslint-config
 * Measures load latency and memory consumption across CommonJS and ESM entrypoints.
 */
const { performance } = require("perf_hooks");

function runBenchmark(iterations = 500) {
  const startMem = process.memoryUsage().heapUsed;
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    delete require.cache[require.resolve("../index.cjs")];
    require("../index.cjs");
  }

  const duration = performance.now() - start;
  const endMem = process.memoryUsage().heapUsed;
  const avgLoadMs = duration / iterations;
  const memDeltaKb = Math.max(0, endMem - startMem) / 1024;

  return {
    iterations,
    totalDurationMs: duration,
    avgLoadMs,
    memDeltaKb,
  };
}

function printBenchmark(iterations = 500) {
  const res = runBenchmark(iterations);
  const output = [
    `Benchmark: ${res.iterations} loads completed in ${res.totalDurationMs.toFixed(2)} ms`,
    `Average load time: ${res.avgLoadMs.toFixed(4)} ms/load`,
    `Memory delta: ${res.memDeltaKb.toFixed(2)} KB`,
  ].join("\n");
  console.log(output);
  return { res, output };
}

if (require.main === module) {
  printBenchmark(500);
}

module.exports = { runBenchmark, printBenchmark };
