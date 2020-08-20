module.exports = {
  // preset: 'ts-jest',
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{vue}',
    '!**/*.d.ts',
    '!<rootDir>/src/main.ts'
  ],
  coverageDirectory: 'coverage',
  testMatch: [
    '**/*.spec.[jt]s?(x)'
  ],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node']
}
