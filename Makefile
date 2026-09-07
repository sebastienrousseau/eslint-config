# POSIX-compatible Makefile for eslint-config
# Works on macOS, Linux, and WSL without modification.

.PHONY: all test lint format bench fuzz examples web clean

all: test lint

test:
	npm test
	node tests/unit.test.js
	node tests/integration.test.js

bench:
	node benches/bench_load.js

fuzz:
	node fuzz/fuzz_config.js

examples:
	node examples/basic.js
	node examples/advanced.js

web:
	ssg build -f web/ssg.toml
	rm -rf public

lint:
	npm run lint 2>/dev/null || true

format:
	npm run format 2>/dev/null || true

clean:
	rm -rf node_modules public package-lock.json.bak
