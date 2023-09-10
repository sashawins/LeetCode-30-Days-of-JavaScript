function expect(val1) {
  return {
    toBe: (val2) => {
      if (val1 !== val2) throw new Error('Not Equal')
      return true
    },
    notToBe: (val2) => {
      if (val1 === val2) throw new Error('Equal')
      return true
    }
  }
}
