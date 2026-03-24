import type {
  beforeEach as jestBeforeEach,
  describe as jestDescribe,
  expect as jestExpect,
  it as jestIt,
  jest as jestObject,
  test as jestTest,
} from '@jest/globals'

declare global {
  const describe: typeof jestDescribe
  const test: typeof jestTest
  const it: typeof jestIt
  const expect: any
  const beforeEach: typeof jestBeforeEach
  const jest: typeof jestObject
}

export {}
