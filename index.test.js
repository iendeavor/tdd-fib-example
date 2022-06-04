const { fib } = require('.')

test('fib should be a function', () => {
  expect(typeof fib).toBe('function')
})

test('fib(0) should be 0', () => {
  expect(fib(0)).toBe(0)
})

test('fib(1) should be 1', () => {
  expect(fib(1)).toBe(1)
})
