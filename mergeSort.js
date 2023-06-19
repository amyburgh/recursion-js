// Time Complexity: O(n log n)
// Space complexity: O(n)
function merge(a, b) {
  const arr = []

  while (a.length && b.length) {
    if (a[0] < b[0]) arr.push(a.shift())
    else arr.push(b.shift())
  }
  return [...arr, ...a, ...b]
}

function mergeSort(array) {
  if (array.length < 2) return array
  const mid = array.length / 2
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

const array = [3, 1, 5, 8, 2, 7, 9, 4, 6, 0]
const sorted = mergeSort(array)
console.log(array, sorted)
