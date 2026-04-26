module.exports = {
  default: {
    require: ['src/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register', 'tsconfig-paths/register'],
    format: ['progress', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 30000, // 30 second timeout
  },
};