#!/bin/bash
set -e

echo "🔧 Building all packages..."
pnpm build

echo "🧪 Running tests..."
pnpm typecheck
pnpm lint

echo "📦 All packages are ready for publishing!"
echo ""
echo "To publish:"
echo "  cd packages/eslint-config && npm publish"
echo "  cd packages/prettier-config && npm publish"
echo "  cd packages/typescript-config && npm publish"
