# Node.js Version Upgrade

## Summary

This project has been upgraded to require **Node.js 20.9.0 or higher**.

## Reason for Upgrade

- **Node.js 18 End-of-Life**: Node.js 18 reached end-of-life on March 27, 2025
- **Security**: Only supported Node.js versions receive security updates
- **Ecosystem Compatibility**: Major tools (ESLint, TypeScript-ESLint) require Node.js 18.18.0+ or 20.9.0+
- **Future-Proofing**: Aligning with industry standards

## Migration Guide

### For Users

If you're using this configuration in your projects:

1. **Check your Node.js version**:

    ```bash
    node --version
    ```

2. **Upgrade to Node.js 20+ if needed**:

    ```bash
    # Using nvm
    nvm install 20
    nvm use 20

    # Or download from https://nodejs.org/
    ```

3. **Update your project's package.json**:
    ```json
    {
        "engines": {
            "node": ">=20.9.0"
        }
    }
    ```

### For CI/CD

Update your CI/CD configurations to use Node.js 20+:

```yaml
# GitHub Actions example
- uses: actions/setup-node@v4
  with:
    node-version: '20'

# Docker example
FROM node:20-alpine
```

## Node.js LTS Timeline

| Version    | Status                   | End of Life    |
| ---------- | ------------------------ | -------------- |
| Node.js 18 | ❌ End-of-life           | March 27, 2025 |
| Node.js 20 | 🔶 Maintenance           | May 14, 2025   |
| Node.js 22 | ✅ **LTS (Recommended)** | May 20, 2027   |

## Breaking Changes

This is a **breaking change** for projects using Node.js < 20.9.0.

### What's Changed

- Minimum Node.js version: `>=18` → `>=20.9.0`
- All packages now require Node.js 20.9.0 or higher
- @types/node remains at v22 (compatible with Node.js 20+)

### What's Not Changed

- All functionality remains the same
- No API changes
- All dependencies remain compatible
