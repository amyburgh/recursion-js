function fibsIter(n) {
  if (n <= 1) return [0]
  const array = [0, 1]

  for (let i = 2; i < n; i++) {
    array.push(array.at(-1) + array.at(-2))
  }
  return array
}

function fibsRec(n, arr = []) {
  if (n <= 1) return [0]
  if (n === 2) return [0, 1]

  const array = fibsRec(n - 1)
  const val = array.at(-1) + array.at(-2)
  array.push(val)
  return array
}

console.log(fibsIter(8))
console.log(fibsRec(8))
