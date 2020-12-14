module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
