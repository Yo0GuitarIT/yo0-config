# yo0-config

Shared TypeScript development configurations for ESLint, Prettier, and TypeScript.

## Quick Setup

### 1. Add as git submodule

```bash
git submodule add https://github.com/Yo0GuitarIT/yo0-config.git config/yo0-config
cd config/yo0-config && pnpm install && pnpm build && cd ../..
```

### 2. Install dependencies

```bash
pnpm add -D eslint@^9.0.0 prettier@^3.0.0 typescript@^5.0.0
```

### 3. Configure files

**tsconfig.json**

```json
{
    "extends": "./config/yo0-config/packages/typescript-config/configs/node.json"
}
```

**eslint.config.js**

```javascript
import config from './config/yo0-config/packages/eslint-config/dist/index.js'
export default [{ files: ['**/*.ts'], ...config.typescript }]
```

**prettier.config.js**

```javascript
export { default } from './config/yo0-config/packages/prettier-config/dist/index.js'
```

### 4. Package.json scripts

```json
{
    "scripts": {
        "build": "tsc",
        "lint": "eslint src --fix",
        "format": "prettier --write src"
    }
}
```

## Project Templates

- **Node.js**: `configs/node.json`
- **React**: `configs/react.json` + `config.react` in ESLint
- **Library**: `configs/library.json`

## Features

✅ ESLint 9.x support • ✅ Auto import sorting • ✅ TypeScript strict mode • ✅ 4-space tabs

## Troubleshooting

**Submodule update**: `cd config/yo0-config && git pull && pnpm build`  
**Peer dependencies**: Ensure ESLint ^9.0.0, Prettier ^3.0.0, TypeScript ^5.0.0
