const nextConfig = require('eslint-config-next');

module.exports = [
  {
    ignores: ['node_modules/', '.next/', 'dist/', 'out/'],
  },
  ...nextConfig,
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'jsx-a11y/anchor-is-valid': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];



