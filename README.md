# yo0-config

Shared configuration packages for TypeScript development tools. This project is intended to be used as a git submodule.

## Packages

- **[eslint-config](./packages/eslint-config/)** - ESLint configuration (TypeScript, Node.js, React support)
- **[prettier-config](./packages/prettier-config/)** - Prettier configuration (tabWidth: 4)
- **[typescript-config](./packages/typescript-config/)** - TypeScript configuration (base, node, web, react)

## Using as a Git Submodule

To use these configurations in your project, add this repository as a git submodule:

```bash
git submodule add <repository_url> path/to/yo0-config
# Example: git submodule add https://github.com/your-username/yo0-config.git config/yo0-config
git submodule update --init --recursive
```

Replace `<repository_url>` with the actual URL of this repository and `path/to/yo0-config` with the desired path where the submodule should be cloned within your project.

## Quick Start

### Prerequisites

- **Node.js**: >=20.9.0 (LTS)
- **Git**: For managing submodules

### Setting up a TypeScript Project

#### 1. Install Peer Dependencies

You'll still need to install the peer dependencies for ESLint, Prettier, and TypeScript in your main project:

```bash
npm install --save-dev eslint prettier typescript
# or
pnpm add -D eslint prettier typescript
# or
yarn add -D eslint prettier typescript
```

#### 2. Create Configuration Files

Reference the configurations from the submodule path. Assuming you cloned the submodule into `config/yo0-config`:

**tsconfig.json**

```json
{
    // Adjust the path based on your submodule location
    "extends": "./config/yo0-config/packages/typescript-config/configs/node.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*"]
}
```

**eslint.config.js**

Make sure your `eslint.config.js` can resolve the paths to the submodule. You might need to adjust paths depending on your project structure and how ESLint resolves modules.

```javascript
// Adjust the import path based on your submodule location
import yo0ConfigEslint from './config/yo0-config/packages/eslint-config/src/index.js' // Assuming index.js is the entry point

export default [
    {
        files: ['**/*.js'],
        ...yo0ConfigEslint.base, // Or however the base config is exported
    },
    {
        files: ['**/*.ts'],
        ...yo0ConfigEslint.typescript, // Or however the typescript config is exported
    },
]
```

_Note: The exact import mechanism for ESLint configs from a submodule might need adjustments based on how `eslint-config/src/index.js` exports its configurations. You might need to use relative paths or ensure Node.js module resolution can find it._

**prettier.config.js**

```javascript
// Adjust the import path based on your submodule location
import yo0ConfigPrettier from './config/yo0-config/packages/prettier-config/src/index.js' // Assuming index.js is the entry point

export default yo0ConfigPrettier
```

#### 3. Add Scripts to package.json

The scripts in your main project's `package.json` remain largely the same:

```json
{
    "scripts": {
        "build": "tsc",
        "lint": "eslint src",
        "lint:fix": "eslint src --fix",
        "format": "prettier --write \\"src/**/*.{ts,js,json}\\"",
        "format:check": "prettier --check \\"src/**/*.{ts,js,json}\\"",
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

Adjust the `extends` path in your `tsconfig.json` similar to the "Quick Start" example:

### Web Project

```json
// tsconfig.json
{
    // Adjust path to submodule
    "extends": "./config/yo0-config/packages/typescript-config/configs/web.json"
}
```

### React Project

```json
// tsconfig.json
{
    // Adjust path to submodule
    "extends": "./config/yo0-config/packages/typescript-config/configs/react.json"
}
```

### Library Project

This config was not previously mentioned but if it exists:

```json
// tsconfig.json
{
    // Adjust path to submodule
    "extends": "./config/yo0-config/packages/typescript-config/configs/library.json"
}
```

## Customizing Configurations

When customizing, you'll import or extend from the submodule's path:

```javascript
// eslint.config.js
// Adjust import path
import yo0ConfigEslint from './config/yo0-config/packages/eslint-config/src/index.js'

export default [
    {
        files: ['**/*.ts'],
        ...yo0ConfigEslint.typescript, // Or however the typescript config is exported
        rules: {
            ...(yo0ConfigEslint.typescript.rules || {}), // Ensure rules object exists
            // Add your custom rules
            'no-console': 'error',
        },
    },
]
```

```javascript
// prettier.config.js
// Adjust import path
import baseConfig from './config/yo0-config/packages/prettier-config/src/index.js'

export default {
    ...baseConfig,
    // Override specific options if needed
    printWidth: 120,
    tabWidth: 2, // if you prefer 2 spaces
}
```

## Development (within this submodule)

```bash
pnpm install    # Install dependencies
pnpm build      # Build all packages
pnpm lint       # Lint code
pnpm typecheck  # Type check
```

## Requirements

- Node.js >=20.9.0
