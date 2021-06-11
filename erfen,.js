// function erfen (arr) {
//   let middle = Math.floor(arr.length /2)
//   let start=0 ,end=arr.length-1
//   while(start<end) {

//   }
// }

function quickSort(arr, start, end) {
  // let start =0,end =arr.length-1
  let i = start,
    j = end,
    tmp
  if (start < end) {
    tmp = arr[i]
    while (i != j) {
      while (j > i && arr[j] > tmp) {
        j--
      }
      arr[i] = arr[j]
      while (j > i && arr[i] < tmp) {
        i++
      }
      arr[j] = arr[i]
    }
    arr[i] = tmp
    quickSort(arr, start, i)
    quickSort(arr, i + 1, end)
  }
}
let arr = [2, 1, 0, 3, 5, 45, 67, 34, 63]
Quick(arr, 0, 8)
console.log(arr);

function Quick(arr, start, end) {
  let i = start,
    j = end
  if (start < end) {
    let tmp = arr[i]
    while (i != j) {

      while (i < j && arr[j] > tmp) j--
      arr[i] = arr[j]
      while (i < j && arr[i] < tmp) i++
      arr[j] = arr[i]
    }
    arr[i] = tmp
    Quick(arr, start, i)
    Quick(arr, i + 1, end)
  }
}


function sum(arr) {
  return arr.reduce((pre, cur) => {
    return pre += cur
  }, 0)
}

console.log(sum([1, 2, 3]));
