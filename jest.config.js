module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/app/**", // should be tested in e2e
    "!src/lib/registry.tsx",
    "!src/types/**",
    "!src/**/stories.tsx",
    "!src/styles/**",
    "!src/pages/**/*.tsx",
    "!src/styles/**/*.ts"
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }]
  },
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use   the browser version
  moduleNameMapper: {
    "^styled-components": "styled-components/dist/styled-components.browser.cjs.js",
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@templates/(.*)$": "<rootDir>/src/templates/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1"
  }
};
