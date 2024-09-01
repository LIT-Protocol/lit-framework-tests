export default {
    moduleNameMapper: {
        "^lit/(.*)$": "<rootDir>/node_modules/lit/$1",
        "\\.(css|less|scss|sass)$": "<rootDir>/src/setupTests.ts",
    },
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
        "^.+\\.js$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    // testMatch: ["<rootDir>/src/app.test.ts"],
};
