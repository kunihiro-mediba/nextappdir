/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    plugins: [
        //
        "@typescript-eslint",
    ],
    extends: [
        //
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals",
    ],
    settings: {
        next: {
            rootDir: "./src",
        },
    },
    rules: {
        "no-console": "warn",
    },
    ignorePatterns: [
        //
        ".next",
        "out",
        "node_modules",
    ],
};
