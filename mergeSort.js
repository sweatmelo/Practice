// function mergeSort(arr) {
//   if(arr.length == 1) return arr
//   let middle = Math.floor(arr.length/2)
//   let left = arr.slice(0,middle)
//   let right = arr.slice(middle)
//   //console.log(left,right);
//   return merge(mergeSort(left),mergeSort(right))
// }

// function merge(arr1,arr2) {



//   console.log(arr1,arr2);
//   let lenr = arr1.length
//   let lenl = arr2.length
//   let i=0,j=0,res =[]
//   while(i<lenr && j<lenl) {
//     if(arr1[i]< arr2[j]) res.push(arr1[i++])
//     else  res.push(arr2[j++])
//   }
//   while(i<lenr) res.push(arr1[i++])
//   while(j<lenl) res.push(arr2[j++])
//    return res
// }




function mergeSort(arr) {
  if(arr.length ==1) return arr
  let middle = Math.floor(arr.length/2)
  let left = arr.slice(0,middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
  let len1 =left.length, len2 =right.length,i=0,j=0,res=[]
  while(i<len1&&j<len2) {
    if(left[i]<right[j]) res.push(left[i++])
    if(left[i]>right[j]) res.push(right[j++])
  }
  while(i<len1) res.push(left[i++])
  while(j<len2) res.push(right[j++])
  return res
} 
console.log(mergeSort([1,2,0]))