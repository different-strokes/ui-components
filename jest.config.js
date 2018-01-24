// Will probably be moved into something sharable in the future
process.env.JEST_JUNIT_OUTPUT = './reports/junit.xml';

module.exports = {
  testResultsProcessor: 'jest-junit',
  coverageDirectory: './reports/coverage',
  coverageReporters: [
    'html',
    'cobertura',
  ],
  collectCoverageFrom: [
    '!**/__mocks__/**',
    '!**/*.spec.js',
    '**/src/**/*.js',
    '!**/node_modules/**',
    '!**/reports/**',
    '!create/**',
  ],
};
