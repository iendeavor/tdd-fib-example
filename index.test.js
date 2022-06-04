const { fib } = require('.')

test('fib should be a function', () => {
  expect(typeof fib).toBe('function')
})
