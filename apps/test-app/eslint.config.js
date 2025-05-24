import config from '@yo0/eslint-config'

export default [
    {
        files: ['**/*.js'],
        ...config.base,
    },
    {
        files: ['**/*.ts'],
        ...config.typescript,
    },
]
