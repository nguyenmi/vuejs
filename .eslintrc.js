module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
};
