function merge(left,right) {
  let r =right.length
  let l = left.length
  let i = 0 ,j =0, res =[]
  while(i<l && j<r) {




    
    if(left[i] < right[j]) 
    res.push(left[i++])
    else 
    res.push(right[j++])
  }
  while(i<l) res.push(left[i++])
  while(j<r) res.push(right[j++])
  return res
}

function mergeSort(arr) {
  if(arr.length == 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

console.log(mergeSort([4,57,5,678,2,4]));