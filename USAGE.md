# Usage Examples

This document shows how to use the shared configurations in different types of projects.

## Setting up a new TypeScript project

### 1. Install dependencies

```bash
npm install --save-dev @yo0/eslint-config @yo0/prettier-config @yo0/typescript-config
npm install --save-dev eslint prettier typescript
```

### 2. Create configuration files

**tsconfig.json**

```json
{
    "extends": "@yo0/typescript-config/configs/node.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*"]
}
```

**eslint.config.js**

```javascript
import config from '@yo0/eslint-config'

export default [
    {
        files: ['**/*.js'],
        ...config.base,
    },
    {
        files: ['**/*.ts'],
        ...config.typescript,
    },
]
```

**prettier.config.js**

```javascript
import config from '@yo0/prettier-config'

export default config
```

### 3. Add scripts to package.json

```json
{
    "scripts": {
        "build": "tsc",
        "lint": "eslint src",
        "lint:fix": "eslint src --fix",
        "format": "prettier --write \"src/**/*.{ts,js,json}\"",
        "format:check": "prettier --check \"src/**/*.{ts,js,json}\"",
        "typecheck": "tsc --noEmit"
    }
}
```

## For different project types

### Web Project

```json
// tsconfig.json
{
    "extends": "@yo0/typescript-config/configs/web.json"
}
```

### React Project

```json
// tsconfig.json
{
    "extends": "@yo0/typescript-config/configs/react.json"
}
```

### Library Project

```json
// tsconfig.json
{
    "extends": "@yo0/typescript-config/configs/library.json"
}
```

## Customizing configurations

You can extend and customize the base configurations:

```javascript
// eslint.config.js
import config from '@yo0/eslint-config'

export default [
    {
        files: ['**/*.ts'],
        ...config.typescript,
        rules: {
            ...config.typescript.rules,
            // Add your custom rules
            'no-console': 'error',
        },
    },
]
```

```javascript
// prettier.config.js
import baseConfig from '@yo0/prettier-config'

export default {
    ...baseConfig,
    // Override specific options if needed
    printWidth: 120,
    // tabWidth is now 4 by default, but you can still customize it
    tabWidth: 2, // if you prefer 2 spaces
}
```
