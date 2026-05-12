/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".astro"],
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      },
    },
    {
      files: ["*.js", "*.mjs", "*.cjs"],
      extends: ["eslint:recommended"],
      rules: {
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
      rules: {
        "astro/no-set-html": "off",
        "astro/no-unused-css-selector": "warn",
        "astro/semi": ["warn", "always"],
        "astro/quotes": ["warn", "double"],
      },
    },
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  globals: {
    Astro: "readonly",
  },
};
