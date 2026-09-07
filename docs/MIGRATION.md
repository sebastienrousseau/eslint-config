# Migration Guide for `@sebastienrousseau/eslint-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/eslint-config`.

## Upgrading from Previous Versions

1. Update package version:
   ```bash
   npm install --save-dev @sebastienrousseau/eslint-config@latest
   ```
2. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/eslint-config` in your `package.json` or config entrypoint.
