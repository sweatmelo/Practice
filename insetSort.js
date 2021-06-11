// // // const insertSort = (array)=>{
// // //   let a,j,tmp
// // //   for(let i=1;i<array.length;i++) {
// // //     tmp = array[i]
// // //     j = i-1
// // //     while(j>=0 && array[j]> tmp){
// // //       array[j+1] = array[j]
// // //       j--
// // //     }
// // //     array[j+1] = tmp
// // //   }
// // //   return array
// // // }
// // // console.log(insertSort([3,6,1,4,2,5]));




// // const insertSort = (arr) => {
// //   let temp
// //   for (let i = 1; i < arr.length; i++) {
// //     temp = arr[i]
// //     let j = i - 1
// //     while (j >= 0 && arr[j] > temp) {
// //       arr[j+1] = arr[j]
// //       j--
// //     }
// //     arr[j+1] = temp
// //   }
// //   return arr
// // }

// // console.log(insertSort([3,1,4,2,6,5]));

// const insertSort = (arr)=>{
//   let temp 
//   for(let i=1;i<arr.length;i++) {
//     temp = arr[i]
//     let j = i-1
//     while(j>=0&&arr[j]>temp) {
//       arr[j+1] = arr[j]
//       j--
//     }
//     arr[j+1] = temp
//   }
//   return arr
// }

// console.log(insertSort([3,1,5,2,6,4]));

const insertSort = (arr)=>{
  let temp,j
  for(let i = 1;i<arr.length;i++) {
    j = i-1
    temp = arr[i]
    while(j>=0 && arr[j]> temp) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

const shellSort = (arr)=>{
  let temp,j,d= arr.length/2
  while(d>0) {
    for(let i = d;i<arr.length;i++) {
      j = i-d
      arr[i] = arr[i]
      while(j>=0 && arr[j] > temp){
        arr[j+d] = arr[j]
        j =- j+d
      }
      arr[j+d] = temp
    }
    d = Math.floor(d/2)
  }
}

/**
 * On2  On 稳定
 */
function Insert(arr) {
  let temp
  for(let i=1;i<arr.length;i++) {
    let j = i-1
    temp = arr[i]
    while(j>=0&&temp<arr[j]) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

function Shell(arr) {
  let d = Math.floor(arr.length/2),j,temp
  while(d>0) {
    for(let i=d;i<arr.length;i++) {
      j = i-d
      temp = arr[i]
      while(j>=0&& temp<arr[j]){
        arr[j+d] = arr[j]
        j-=d
      }
      arr[j+d] = temp
    }
    d/=2
  }
}

function quickSort(arr,start,end) {
  let i =start,j=end,temp 
  if(start<end) {
    temp = arr[i]
    while(i!=j) {
      while(i<j&& arr[j]>temp)j--
       arr[i] = arr[j]
      while(i<j&& arr[i]<temp) i++
      arr[j] = arr[i]
    }
    arr[i] = temp
    quickSort(arr,start,i-1)
    quickSort(arr,i+1,end)
  }
  
}
let arr =[1,3,4,2,7,6]
quickSort(arr,0,5)
console.log(arr);

// function quickSort(arr,s,t) {
//   let i = s,j= t
//   let tmp
//   if(s<t) {
//       tmp = arr[s]
//       while(i!=j) {
//           while(j>i && arr[j]>=tmp)
//           j--
//           arr[i] = arr[j]
//           while(i<j && arr[i]<=tmp)
//           i++
//           arr[j] = arr[i]
//       }
//       arr[i] = tmp
//       quickSort(arr,s,i-1)
//       quickSort(arr,i+1,t)
//   }
// }
// let arr = [2,1,0,3,5,45,67,34,63]
// quickSort(arr,0,8)
// console.log(arr)

function mergeSort(arr) {
  if(arr.length == 1) return arr
  let middle =Math.floor(arr.length/2)
  let left = arr.slice(0,middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))

}

function merge(left,right) {
  let len1 = left.length,len2 =right.length,i=0,j=0,res=[]
  while(i<len1 && j<len2) {
    if(left[i]<right[j]) res.push(left[i++])
    if(left[i]>right[j]) res.push(right[j++])
  }
  while(i<len1) {
    res.push(left[i++])
  }
  while(j<len1) {
    res.push(right[j++])
  }
  return res
}

console.log(mergeSort([2,1,0,3,5,45,67,34,63]));