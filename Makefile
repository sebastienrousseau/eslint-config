# POSIX-compatible Makefile for eslint-config
# Works on macOS, Linux, and WSL without modification.

.PHONY: all test lint format clean

all: test lint

test:
	npm test

lint:
	npm run lint 2>/dev/null || true

format:
	npm run format 2>/dev/null || true

clean:
	rm -rf node_modules package-lock.json.bak
