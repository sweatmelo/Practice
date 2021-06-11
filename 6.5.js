/**
 * 写着玩
 */

function merge(array) {
  if (array.length == 1) return array
  let mid = Math.floor(array.length / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)
  return mergeSort(merge(left), merge(right))
}

const mergeSort = (arr1, arr2) => {
  let res = [],
    i = 0,
    j = 0
  let len1 = arr1.length,
    len2 = arr2.length
  while (i < len1 && j < len2) {
    if (arr1[i] <= arr2[j]) res.push(arr1[i++])
    else res.push(arr2[j++])
  }
  while (i < len1) res.push(arr1[i++])
  while (j < len2) res.push(arr2[j++])
  return res
}

console.log(merge([1, 4, 7, 0, 2, 3, 6]));

/**
 * and quickSort
 */

function quickSort(array, start, end) {
  let i = start,
    j = end,
    res = [],
    temp
  if (start < end) {
    temp = arr[i]
    while (i != j) {
      while (i < j && arr[j] > temp) j--
      arr[i] = arr[j]
      while(i < j && arr[i] < temp ) i++
      arr[j] = arr[i]
    }
    quickSort(array, start, i)
    quickSort(array, i + 1, end)
  }


}
