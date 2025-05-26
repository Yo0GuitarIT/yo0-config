import config from '@yo0-guitar-dev/eslint-config';

export default [
    {
        files: ['**/*.js'],
        ...config.base,
    },
    {
        files: ['**/*.ts'],
        ...config.typescript,
    },
];
