var createCounter = function (init) {
  let counter = init
  return {
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => (counter = init),
  }
}
