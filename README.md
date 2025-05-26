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

## Available Configurations

### TypeScript

- `base.json` - Basic configuration
- `node.json` - Node.js projects
- `web.json` - Browser projects
- `react.json` - React projects
- `library.json` - Library projects

### ESLint

- `base` - Basic JavaScript rules
- `typescript` - TypeScript project rules
- `node` - Node.js environment rules
- `react` - React project rules

### Prettier

- `base` - Basic formatting rules (default)
- `typescript` - TypeScript files
- `json` - JSON files
- `markdown` - Markdown files

## Configuration Details

- **Indentation**: 4 spaces
- **Semicolons**: Required
- **Quotes**: Single quotes
- **Line width**: 80 characters
- **Trailing commas**: ES5 style
- **Auto sorting**: Import statements
- **Strict mode**: TypeScript strict checking enabled

## Features

✅ ESLint 9.x support • ✅ Auto import sorting • ✅ TypeScript strict mode • ✅ 4-space tabs

## Maintenance

**Update submodule**: `cd config/yo0-config && git pull && pnpm build`  
**Run checks**: `cd config/yo0-config && pnpm check`  
**Dependencies**: Ensure ESLint ^9.0.0, Prettier ^3.0.0, TypeScript ^5.0.0

## Development

This is a private configuration repository used via git submodule.

### Making Changes

1. Edit configuration files in the submodule
2. Run `pnpm check` to verify everything works
3. Commit and push changes to the repository

### Project Structure

- `packages/eslint-config/` - ESLint configuration
- `packages/prettier-config/` - Prettier configuration
- `packages/typescript-config/` - TypeScript configurations
- `apps/test-app/` - Test application for validation
- `check.sh` - Validation script
