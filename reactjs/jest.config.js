module.exports = {
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "<rootDir>/src/setupTests.ts",
      },
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleDirectories: ["node_modules", "<rootDir>/"],
    extensionsToTreatAsEsm: [".ts", ".tsx"],
};
