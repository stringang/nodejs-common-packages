const path = require('path');

module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsConfig: path.resolve(process.cwd(), 'tsconfig.json'),
      packageJson: path.resolve(process.cwd(), 'package.json'),
    },
  },
};
