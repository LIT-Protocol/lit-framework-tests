module.exports = {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        '^.+\\.vue$': 'vue-jest',
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
}