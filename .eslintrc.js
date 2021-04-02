module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "max-len": ["error", { code: 400, ignoreComments: true }],
    "import/prefer-default-export": "off",
    "import/newline-after-import": "off",
  },
  plugins: ["jest"],
};
