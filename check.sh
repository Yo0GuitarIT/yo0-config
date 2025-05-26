#!/bin/bash
set -e

echo "🔧 Building all packages..."
pnpm build

echo "🧪 Running tests..."
pnpm typecheck
cd apps/test-app && pnpm lint && pnpm format:check
cd ../..

echo "✅ All checks passed! Ready to use."
