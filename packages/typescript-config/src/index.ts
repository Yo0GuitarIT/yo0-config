export interface TypeScriptConfig {
    compilerOptions: Record<string, any>
    include?: string[]
    exclude?: string[]
    extends?: string
}

export const base: TypeScriptConfig = {
    compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'bundler',
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        strict: true,
        skipLibCheck: true,
        declaration: true,
        declarationMap: true,
        sourceMap: true,
        resolveJsonModule: true,
    },
    exclude: ['node_modules', 'dist', '**/*.test.ts', '**/*.spec.ts'],
}

export const node: TypeScriptConfig = {
    ...base,
    compilerOptions: {
        ...base.compilerOptions,
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'node',
        types: ['node'],
    },
}

export const web: TypeScriptConfig = {
    ...base,
    compilerOptions: {
        ...base.compilerOptions,
        target: 'ES2020',
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        moduleResolution: 'bundler',
    },
}

export const react: TypeScriptConfig = {
    ...web,
    compilerOptions: {
        ...web.compilerOptions,
        jsx: 'react-jsx',
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
    },
}

export const library: TypeScriptConfig = {
    ...base,
    compilerOptions: {
        ...base.compilerOptions,
        declaration: true,
        declarationMap: true,
        outDir: 'dist',
        rootDir: 'src',
    },
    include: ['src/**/*'],
}

export default {
    base,
    node,
    web,
    react,
    library,
}
