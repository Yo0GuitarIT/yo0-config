# @yo0-guitar-dev/configs

A collection of shared configuration packages for development tools, built with TypeScript and designed for modern web development.

## Packages

### [@yo0-guitar-dev/eslint-config](./packages/eslint-config/)

Shared ESLint configurations for TypeScript, Node.js, and React projects.

### [@yo0-guitar-dev/prettier-config](./packages/prettier-config/)

Shared Prettier configuration for consistent code formatting.

### [@yo0-guitar-dev/typescript-config](./packages/typescript-config/)

Shared TypeScript configurations for different project types.

## Quick Start

### Installation

```bash
# Install all packages
pnpm install

# Build all packages
pnpm build
```

### Usage

#### ESLint Configuration

```javascript
// eslint.config.js
import config from '@yo0-guitar-dev/eslint-config'

export default [
    {
        ...config.typescript,
        files: ['**/*.ts', '**/*.tsx'],
    },
    {
        ...config.base,
        files: ['**/*.js', '**/*.jsx'],
    },
]
```

#### Prettier Configuration

```javascript
// prettier.config.js
import config from '@yo0-guitar-dev/prettier-config'

export default config
```

#### TypeScript Configuration

```json
// tsconfig.json
{
    "extends": "@yo0-guitar-dev/typescript-config/configs/node.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*"]
}
```

## Available Configurations

### ESLint

- `base` - Base ESLint rules for JavaScript
- `typescript` - TypeScript-specific rules
- `node` - Node.js environment rules
- `react` - React and React Hooks rules

### Prettier

- `base` - Standard formatting rules
- `typescript` - TypeScript parser
- `json` - JSON formatting
- `markdown` - Markdown formatting

### TypeScript

- `base` - Base TypeScript configuration
- `node` - Node.js projects
- `web` - Web projects
- `react` - React projects
- `library` - Library projects

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Watch mode for development
pnpm dev

# Run linting
pnpm lint

# Run type checking
pnpm typecheck

# Clean all build outputs
pnpm clean
```

## Testing

The `apps/test-app` directory contains a test application that uses all the shared configurations to ensure they work correctly together.

```bash
cd apps/test-app
pnpm dev        # Run the test app
pnpm lint       # Test ESLint configuration
pnpm format     # Test Prettier configuration
pnpm typecheck  # Test TypeScript configuration
```

## License

MIT
