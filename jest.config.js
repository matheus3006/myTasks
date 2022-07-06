module.exports = {
  "preset": "react-native",
  "setupFilesAfterEnv": [
    "@testing-library/jest-native/extend-expect"
  ],
  "testPathIgnorePatters": [
    "/node_modules",
    "/android",
    "/ios"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverage: true,
  collectCoverageFrom:[
    "src/**/*.tsx",
    "!src/**/*.spec.tsx"
    
  ],
  covarageReportes:["lcov"]
}
