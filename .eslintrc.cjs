module.exports = {
  root: true,
  extends: [
    '@tinkin',
    '@tinkin/eslint-config/react',
    '@tinkin/eslint-config/next',
  ],
  rules: {
    'react/no-unescaped-entities': 0,
  },
}
