module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/tests/setup.js'],
  transform: {
    '^.+\\.(js|ts|tsx)$': require.resolve(
      'react-native/jest/preprocessor.js',
    ),
  },
};
