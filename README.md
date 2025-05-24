# @yo0-guitar-dev/configs

TypeScript 開發工具的共享配置包。

## 套件

- **[@yo0-guitar-dev/eslint-config](./packages/eslint-config/)** - ESLint 配置 (支援 TypeScript, Node.js, React)
- **[@yo0-guitar-dev/prettier-config](./packages/prettier-config/)** - Prettier 配置 (tabWidth: 4)
- **[@yo0-guitar-dev/typescript-config](./packages/typescript-config/)** - TypeScript 配置 (base, node, web, react)

## 使用方式

### ESLint

```javascript
// eslint.config.js
import config from '@yo0-guitar-dev/eslint-config'
export default config.typescript
```

### Prettier

```javascript
// prettier.config.js
import config from '@yo0-guitar-dev/prettier-config'
export default config
```

### TypeScript

```json
// tsconfig.json
{
    "extends": "@yo0-guitar-dev/typescript-config/configs/node.json"
}
```

## 開發

```bash
pnpm install    # 安裝依賴
pnpm build      # 建置所有套件
pnpm lint       # 檢查程式碼
pnpm typecheck  # 型別檢查
```

## 需求

- Node.js >=20.9.0
- pnpm >=8.0.0
