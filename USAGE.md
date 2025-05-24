# Usage Examples

This document shows how to use the shared configurations in different types of projects.

## Prerequisites

- **Node.js**: >=20.9.0 (LTS)
- **Package Manager**: npm, pnpm, or yarn

## Setting up a new TypeScript project

### 1. Install dependencies

```bash
npm install --save-dev @yo0-guitar-dev/eslint-config @yo0-guitar-dev/prettier-config @yo0-guitar-dev/typescript-config
npm install --save-dev eslint prettier typescript
```

### 2. Create configuration files

**tsconfig.json**

```json
{
    "extends": "@yo0-guitar-dev/typescript-config/configs/node.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*"]
}
```

**eslint.config.js**

```javascript
import config from '@yo0-guitar-dev/eslint-config'

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
import config from '@yo0-guitar-dev/prettier-config'

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

## Features included

### Automatic Import/Export Sorting

The ESLint configuration includes automatic import and export sorting:

- **Import sorting**: Automatically sorts imports by type (Node.js built-ins, third-party packages, relative imports)
- **Export sorting**: Automatically sorts export statements
- **Unused import removal**: Automatically removes unused imports

```typescript
// Before linting
import lodash from 'lodash'
import { readFileSync } from 'fs'
import axios from 'axios'
import { helper } from './utils'

// After running `eslint --fix`
import { readFileSync } from 'fs'
import axios from 'axios'
import lodash from 'lodash'
import { helper } from './utils'
```

Run `npm run lint:fix` to automatically sort imports and remove unused ones.

## For different project types

### Web Project

```json
// tsconfig.json
{
    "extends": "@yo0-guitar-dev/typescript-config/configs/web.json"
}
```

### React Project

```json
// tsconfig.json
{
    "extends": "@yo0-guitar-dev/typescript-config/configs/react.json"
}
```

### Library Project

```json
// tsconfig.json
{
    "extends": "@yo0-guitar-dev/typescript-config/configs/library.json"
}
```

## Customizing configurations

You can extend and customize the base configurations:

```javascript
// eslint.config.js
import config from '@yo0-guitar-dev/eslint-config'

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
import baseConfig from '@yo0-guitar-dev/prettier-config'

export default {
    ...baseConfig,
    // Override specific options if needed
    printWidth: 120,
    // tabWidth is now 4 by default, but you can still customize it
    tabWidth: 2, // if you prefer 2 spaces
}
```
