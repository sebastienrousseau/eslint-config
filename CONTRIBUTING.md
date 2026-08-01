# Contributing Guidelines

Thank you for considering contributing to this repository!

## Development Workflow

1. **Fork & Clone**:
   ```bash
   git clone https://github.com/sebastienrousseau/eslint-config.git
   cd eslint-config
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Validation Tests**:
   ```bash
   npm test
   ```

## Commit Standards

This repository enforces **Conventional Commits**:
- `feat:` A new configuration feature
- `fix:` A bug fix in rules or config options
- `docs:` Documentation improvements
- `ci:` CI/CD workflow updates
- `chore:` Maintenance or dependency updates

**Note**: All commits MUST be cryptographically signed using SSH or GPG keys (`git commit -S`).

## Pull Request Process

1. Create a feature branch (`git checkout -b feat/my-improvement`).
2. Ensure all validation tests pass (`npm test`).
3. Push to your fork and submit a Pull Request targeting `main`.
4. Resolve all review feedback.
