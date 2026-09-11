---
author: "Sebastien Rousseau"
date: "2026-09-07"
language: "en-GB"
layout: "index"
schema: "index"
changefreq: "weekly"
copyright_year: "2026"
locale_path: "/"
base_path: "/"
name: "eslint-config"
short_name: "CF"
openssf_id: "14524"
slug_install: "installation"
slug_usage: "usage"
slug_ref: "reference"
slug_mcp: "mcp"
nav_home: "Home"
nav_install: "Installation"
nav_usage: "Usage"
nav_ref: "Reference"
nav_mcp: "MCP"
label_skip: "Skip to main content"
label_menu: "Menu"
label_nav: "Main"
label_theme: "Theme"
label_theme_system: "System"
label_docs: "Documentation"
label_footer_nav: "Documentation"
label_docs_nav: "Documentation sections"
label_crumbs: "Breadcrumb"
label_pager: "Page"
label_prev: "Previous"
label_next: "Next"
label_toc: "On this page"
screenshot_alt: "@sebastienrousseau/eslint-config architecture and rule enforcement."
footer_note: "@sebastienrousseau/eslint-config is part of the @sebastienrousseau/config suite. Published under Apache-2.0 OR MIT."
copyright: "© 2026 Sebastien Rousseau. Licensed under Apache-2.0 OR MIT."
translation_key: "home"
title: "@sebastienrousseau/eslint-config — Shareable ESLint flat configuration rules for modern JavaScript and TypeScript codebases."
description: "Shareable ESLint flat configuration rules for modern JavaScript and TypeScript codebases."
keywords: "eslint-config, eslint, eslint flat config, linter, javascript, typescript, code quality, developer tools, sebastien rousseau, standard"
hero_tag: "v0.0.4"
hero_tagline: "Strict, modern ESLint flat configuration for TypeScript and JavaScript"
headline: "@sebastienrousseau/eslint-config"
lead: "Shareable ESLint flat configuration rules for modern JavaScript and TypeScript codebases."
cta_primary: "Install @sebastienrousseau/eslint-config"
cta_secondary: "Reference Guide"
start_h: "Start with one command"
start_lead: "Install with your favourite package manager and extend in seconds."
snippet_caption: "Install @sebastienrousseau/eslint-config"
snippet_code: "npm install --save-dev @sebastienrousseau/eslint-config"
features_h: "Key capabilities"
features_lead: "Engineered for consistency, performance, and strict typing."
f1_h: "Zero Runtime Dependencies"
f1_body: "Pure configuration with no bloated runtime dependency trees, keeping builds fast and secure."
f2_h: "Dual Module Exports"
f2_body: "Full support for modern ECMAScript Modules (ESM) and CommonJS (CJS) environments."
f3_h: "Full TypeScript Definitions"
f3_body: "Includes complete index.d.ts declarations for rich IDE autocompletion and type checking."
f4_h: "Deterministic Quality Gates"
f4_body: "Audited continuously with SLSA provenance, CodeQL, and automated test suites."
proof_h: "Production Standards"
proof_lead: "Engineered for high-assurance developer platforms and open-source infrastructure."
proof_1_t: "100%"
proof_1_d: "OpenSSF Best Practices passing status and automated scorecard audits."
proof_2_t: "0"
proof_2_d: "Runtime dependencies for lightning-fast installs and minimal attack surface."
proof_3_t: "100%"
proof_3_d: "TypeScript type coverage with comprehensive definitions."
cta_final: "Explore Installation Guide"
---

## What is @sebastienrousseau/eslint-config?

**@sebastienrousseau/eslint-config** is an enterprise-grade, shareable configuration for [ESLint](https://github.com/sebastienrousseau/eslint-config)—the preeminent JavaScript and TypeScript static analysis linter using the modern Flat Config standard. Designed to deliver vetted, deterministic defaults, this package eliminates manual setup boilerplate and establishes rigorous code quality standards across modern software development pipelines.

By adopting this configuration, engineering teams ensure unified consistency across local development, continuous integration, and automated deployments. The package adheres strictly to the OpenSSF Best Practices badge program (ID: 14524) and achieves top-tier security ratings via Scorecard audits.

Explore the complete [Installation Guide](installation/), review the comprehensive [Usage Documentation](usage/), inspect the [API Reference](reference/), or discover AI integrations via the [Model Context Protocol (MCP)](mcp/).

<hr class="divider" />

## Why Developers Choose @sebastienrousseau/eslint-config

Modern JavaScript and TypeScript repositories frequently suffer from configuration drift, fragmented standards, and maintenance overhead. **@sebastienrousseau/eslint-config** directly solves these challenges:

- **Battle-Tested Standards**: Curated rules engineered for high maintainability, deterministic builds, and defect prevention.
- **Zero Runtime Dependencies**: The package adds exactly zero runtime dependencies to your production bundle, eliminating supply-chain attack vectors.
- **Dual Module Compatibility**: Out-of-the-box support for both ECMAScript Modules (`import`) and CommonJS (`require`).
- **TypeScript Type Safety**: Bundled TypeScript definitions ensure all configuration objects and functions validate under strict `tsc` checks.
- **Enterprise Security & Supply Chain Defense**: Cryptographically signed commits and automated OpenSSF Scorecard auditing, SLSA Provenance generation, and continuous CodeQL security scanning.

<hr class="divider" />

## How to Get Started in 3 Steps

Integrating `@sebastienrousseau/eslint-config` into any new or existing repository requires only three simple steps.

### Step 1: Install the Package

Install the configuration as a development dependency using your preferred package manager:

```bash
# Using npm
npm install --save-dev @sebastienrousseau/eslint-config

# Using pnpm
pnpm add -D @sebastienrousseau/eslint-config

# Using yarn
yarn add -D @sebastienrousseau/eslint-config
```

For advanced package manager configurations and offline workflows, consult our [Installation Guide](installation/).

### Step 2: Configure `eslint.config.js`

Create or update your `eslint.config.js` file at the root of your project to extend the shared configuration:

```javascript
import config from "@sebastienrousseau/eslint-config";

export default [
  ...config
];
```

Learn how to customize specific rules and override settings in the [Usage Guide](usage/).

### Step 3: Run ESLint in Your Workflow

Execute ESLint directly or configure standard quality scripts in your `package.json`:

```bash
npx eslint .
```

Analyze repository files for syntax errors, potential bugs, and anti-patterns.

<hr class="divider" />

## Key Features & Architecture

| Feature | Description | Benefit |
| :--- | :--- | :--- |
| **Zero Runtime Overhead** | Zero runtime dependencies | Immunity against upstream supply-chain vulnerabilities |
| **Dual Module Support** | Full ESM and CommonJS exports | Seamless integration across legacy and modern toolchains |
| **Strict Type Safety** | Bundled TypeScript `.d.ts` definitions | Instant autocomplete and schema validation in modern IDEs |
| **Production Proven** | 100% test coverage with native Node test runners | Guaranteed reliability and predictable execution |
| **OpenSSF Certified** | Passing OpenSSF Best Practices badge status | High-assurance security and supply chain defense |

For a detailed breakdown of all exported configuration files and schema fields, visit the [Reference Guide](reference/).

<hr class="divider" />

## Frequently Asked Questions (FAQ)

### Does this support ESLint 9+ Flat Config?
Yes. It is fully built on the ESLint Flat Config (eslint.config.js) architecture, removing legacy .eslintrc dependencies and offering native ESM/CJS compatibility.

### Can I override individual rules in my project?
Yes. Every configuration allows local overrides directly within your `eslint.config.js` file or inline settings. Detailed override recipes are documented in the [Usage Guide](usage/).

### Is @sebastienrousseau/eslint-config safe for production CI/CD?
Yes. The package complies with OpenSSF Best Practices criteria, carries an active OpenSSF Scorecard audit, and contains zero runtime dependencies. Every release undergoes continuous automated regression testing and CodeQL analysis.

### How does this package support AI and agentic workflows?
The project includes a Model Context Protocol ([MCP](mcp/)) configuration, enabling LLM coding assistants and AI agents to understand, validate, and execute repository configuration tasks autonomously.
