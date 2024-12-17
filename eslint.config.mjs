import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { ignores: ["node_modules/", "test-results/", "playwright-report", "summary.json", ".vscode/*"] },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    eslintPluginPrettier,
    {
        rules: {
            // "capitalized-comments": ["error", "always"],
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                },
            ],
            "no-unused-vars": "off",
        },
    },
];
