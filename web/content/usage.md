---
title: "Usage — @sebastienrousseau/eslint-config"
description: "How to use and configure @sebastienrousseau/eslint-config."
layout: "doc"
locale_path: "/"
base_path: "/"
nav_home: "Home"
nav_install: "Installation"
nav_usage: "Usage"
nav_ref: "Reference"
nav_mcp: "MCP"
slug_install: "installation"
slug_usage: "usage"
slug_ref: "reference"
slug_mcp: "mcp"
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
author: "Sebastien Rousseau"
language: "en-GB"
copyright_year: "2026"
copyright: "© 2026 Sebastien Rousseau. Licensed under Apache-2.0 OR MIT."
footer_note: "@sebastienrousseau/eslint-config is part of the @sebastienrousseau/config suite. Published under Apache-2.0 OR MIT."
name: "eslint-config"
short_name: "CF"
openssf_id: "14524"
translation_key: "home"
screenshot_alt: "@sebastienrousseau/eslint-config architecture and rule enforcement."
cur_install: ""
cur_usage: ""
cur_ref: ""
cur_mcp: ""
eyebrow: "Documentation"
headline: "Usage"
lead: "How to use and configure @sebastienrousseau/eslint-config."
toc_1: "CommonJS"
toc_1_id: "commonjs"
toc_2: "ES Modules"
toc_2_id: "es-modules"
toc_3: "In `package.json`"
toc_3_id: "in-package-json"
prev_href: "/installation/"
prev_label: "Installation"
next_href: "/reference/"
next_label: "Reference"
---

# Usage

`@sebastienrousseau/eslint-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/eslint-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/eslint-config";
export default config;
```

## In `package.json`

```json
{
  "eslint": "@sebastienrousseau/eslint-config"
}
```
