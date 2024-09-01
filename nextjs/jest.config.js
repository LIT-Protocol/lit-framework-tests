const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(mjs)$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

module.exports = createJestConfig(customJestConfig);
