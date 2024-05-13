import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    plugins: {
      prettier: eslintConfigPrettier,
    },
  },
  {
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        it: "readonly",
      },
    },
    ignores: ["node_modules", "package-lock.json"],
    rules: {
      "no-unused-vars": 2,
      "no-console": 2,
    },
  },
];
