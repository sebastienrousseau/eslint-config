---
title: "Usage — @sebastienrousseau/eslint-config"
description: "How to use and configure @sebastienrousseau/eslint-config."
layout: "doc"
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
