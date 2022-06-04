const cache = {}

const fib = (n) => {
  if (n === 0) return cache[n] = 0
  if (n === 1) return cache[n] = 1

  const fib1 = cache[n-1] ?? exports.fib(n - 1)
  const fib2 = cache[n-2] ?? exports.fib(n - 2)
  return cache[n] = fib1 + fib2
}

exports.fib = fib

// export for testing purposes
exports.cache = cache
