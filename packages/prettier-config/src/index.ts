import type { Config } from 'prettier'

export const base: Config = {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    printWidth: 80,
    useTabs: false,
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'lf',
}

export const typescript: Config = {
    ...base,
    parser: 'typescript',
}

export const json: Config = {
    ...base,
    parser: 'json',
}

export const markdown: Config = {
    ...base,
    parser: 'markdown',
    printWidth: 120,
}

export default base
