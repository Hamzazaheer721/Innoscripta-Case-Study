module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json"
      }
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // Your custom rules
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function"
      }
    ],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true
      }
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true
      }
    ],
    // "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-props-no-spreading": ["off"],
    "react/jsx-uses-react": ["off"],
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-unsafe-return": ["off"],
    "object-curly-newline": ["off"],
    "react/jsx-one-expression-per-line": [
      "off",
      {
        allow: "single-child"
      }
    ],
    "react/no-unescaped-entities": ["off"],
    "@typescript-eslint/indent": ["off"]
  }
}
