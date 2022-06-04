const fibModule = require('.')
const { fib } = fibModule

afterEach(() => {
  jest.clearAllMocks()
})

test('fib should be a function', () => {
  expect(typeof fib).toBe('function')
})

test('fib(0) should be 0', () => {
  expect(fib(0)).toBe(0)
})

test('fib(1) should be 1', () => {
  expect(fib(1)).toBe(1)
})

test('fib(2) should be 1', () => {
  expect(fib(2)).toBe(1)
})

test('fib(2) should call fib(1) and fib(0)', () => {
  const spyFib = jest.spyOn(fibModule, 'fib')

  spyFib(2)

  expect(spyFib).toHaveBeenCalledTimes(3)
  expect(spyFib).toHaveBeenCalledWith(2)
  expect(spyFib).toHaveBeenCalledWith(1)
  expect(spyFib).toHaveBeenCalledWith(0)
})
