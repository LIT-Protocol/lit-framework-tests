module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/setupTests.ts",
    "^react$": "preact/compat",
    "^react-dom/test-utils$": "preact/test-utils",
    "^react-dom$": "preact/compat",
    "^react/jsx-runtime$": "preact/jsx-runtime"
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": ["babel-jest", { configFile: "./babel.config.js" }]
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  transformIgnorePatterns: [
    "/node_modules/(?!(preact|@testing-library/preact)/)"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "mjs"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  extensionsToTreatAsEsm: [ '.ts', '.tsx']
};
