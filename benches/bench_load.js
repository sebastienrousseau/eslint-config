/**
 * Benchmark runner for @sebastienrousseau/eslint-config
 * Measures load latency and memory consumption.
 */
const { performance } = require("perf_hooks");

const startMem = process.memoryUsage().heapUsed;
const start = performance.now();

const iterations = 500;
for (let i = 0; i < iterations; i++) {
  delete require.cache[require.resolve("../index.cjs")];
  require("../index.cjs");
}

const duration = performance.now() - start;
const endMem = process.memoryUsage().heapUsed;

console.log(`Benchmark: ${iterations} loads completed in ${duration.toFixed(2)} ms`);
console.log(`Average load time: ${(duration / iterations).toFixed(4)} ms/load`);
console.log(`Memory delta: ${(Math.max(0, endMem - startMem) / 1024).toFixed(2)} KB`);
