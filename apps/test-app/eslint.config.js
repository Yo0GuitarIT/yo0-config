import config from "@yo0-config/eslint-config";

export default [
    {
        files: ["**/*.js"],
        ...config.base,
    },
    {
        files: ["**/*.ts"],
        ...config.typescript,
    },
];
