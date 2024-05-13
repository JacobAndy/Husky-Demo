/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: "100",
    },
  },
  collectCoverageFrom: ["*.js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  testMatch: ["**.test.js"],
  moduleFileExtensions: ["js", "node"],
  coverageProvider: "v8",
  testEnvironment: "jest-environment-node",
};

export default config;
