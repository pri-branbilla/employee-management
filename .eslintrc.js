module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    "react/prop-types": ["error", { "ignore": ["navigation"] }],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    'react/jsx-filename-extension': 'off',
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "max-len": [
      "error",
      { "code": 80 }
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "semi": ["error", "never"]
  },
  globals: {
    'fetch': false
  }
};
