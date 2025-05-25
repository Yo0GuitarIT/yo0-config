# @yo0-guitar-dev/configs

Shared configuration packages for TypeScript development tools.

## Packages

- **[@yo0-guitar-dev/eslint-config](./packages/eslint-config/)** - ESLint configuration (TypeScript, Node.js, React support)
- **[@yo0-guitar-dev/prettier-config](./packages/prettier-config/)** - Prettier configuration (tabWidth: 4)
- **[@yo0-guitar-dev/typescript-config](./packages/typescript-config/)** - TypeScript configuration (base, node, web, react)

## Quick Start

### Prerequisites

- **Node.js**: >=20.9.0 (LTS)
- **Package Manager**: npm, pnpm, or yarn

### Setting up a TypeScript Project

#### 1. Install Dependencies

**Option 1: From npm (public)**
```bash
npm install --save-dev @yo0-guitar-dev/eslint-config @yo0-guitar-dev/prettier-config @yo0-guitar-dev/typescript-config
npm install --save-dev eslint prettier typescript
```

**Option 2: From Git (private/development)**
```bash
npm install --save-dev git+https://github.com/Yo0GuitarIT/yo0-config.git
npm install --save-dev eslint prettier typescript
```

Or add directly to package.json:
```json
{
  "devDependencies": {
    "@yo0-guitar-dev/eslint-config": "git+https://github.com/Yo0GuitarIT/yo0-config.git",
    "@yo0-guitar-dev/prettier-config": "git+https://github.com/Yo0GuitarIT/yo0-config.git", 
    "@yo0-guitar-dev/typescript-config": "git+https://github.com/Yo0GuitarIT/yo0-config.git",
    "eslint": "^9.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

#### 2. Create Configuration Files

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

#### 3. Add Scripts to package.json

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

## Features

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

## Different Project Types

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

## Customizing Configurations

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

## Development

```bash
pnpm install    # Install dependencies
pnpm build      # Build all packages
pnpm lint       # Lint code
pnpm typecheck  # Type check
```

## Requirements

- Node.js >=20.9.0

> **Note**: This project requires Node.js 20.9.0 or higher due to:
>
> - Node.js 18 reached end-of-life on March 27, 2025
> - Security: Only supported Node.js versions receive security updates
> - Ecosystem Compatibility: Major tools (ESLint, TypeScript-ESLint) require Node.js 20.9.0+
>
> **Migration**: If upgrading from an older Node.js version:
>
> ```bash
> # Check current version
> node --version
>
> # Using nvm (recommended)
> nvm install 20
> nvm use 20
>
> # Update your package.json
> {
>   "engines": {
>     "node": ">=20.9.0"
>   }
> }
> ```
