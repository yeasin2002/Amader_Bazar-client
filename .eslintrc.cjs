module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "@tanstack/query", "perfectionist", "unicorn"],
    rules: {
        "unicorn/better-regex": "error",
        "unicorn/…": "error",
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/prefer-query-object-syntax": "error",
        "@tanstack/query/stable-query-client": "error",
        "perfectionist/sort-objects": [
            "error",
            { type: "natural", order: "asc" },
        ],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
};
