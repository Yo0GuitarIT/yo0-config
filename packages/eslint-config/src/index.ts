import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

export interface ESLintConfig {
    files?: string[]
    languageOptions?: {
        ecmaVersion?: string | number
        sourceType?: 'script' | 'module'
        parser?: any
        parserOptions?: Record<string, any>
        globals?: Record<string, any>
    }
    plugins?: Record<string, any>
    rules?: Record<string, any>
    settings?: Record<string, any>
}

export const base: ESLintConfig = {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        globals: {
            console: 'readonly',
            process: 'readonly',
            Buffer: 'readonly',
            __dirname: 'readonly',
            __filename: 'readonly',
            global: 'readonly',
        },
    },
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
    },
}

export const typescript: ESLintConfig = {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        parser: tsParser,
        parserOptions: {
            project: './tsconfig.json',
        },
    },
    plugins: {
        '@typescript-eslint': tsPlugin,
        'simple-import-sort': simpleImportSort,
        'unused-imports': unusedImports,
    },
    rules: {
        'no-unused-vars': 'off', // Turn off base rule as it can report incorrect errors
        'prefer-const': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',

        // TypeScript-specific rules
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-var-requires': 'error',

        // Import sorting
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',

        // Unused imports
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
}

export const node: ESLintConfig = {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        globals: {
            process: 'readonly',
            Buffer: 'readonly',
            __dirname: 'readonly',
            __filename: 'readonly',
            global: 'readonly',
            module: 'readonly',
            require: 'readonly',
            exports: 'readonly',
        },
    },
    rules: {
        'no-process-exit': 'off',
    },
}

export const react: ESLintConfig = {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
}

export default {
    base,
    typescript,
    node,
    react,
}
