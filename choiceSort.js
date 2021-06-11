// // // const bubbleSort = (arr)=>{
// // //   let temp
// // //   for(let i=0;i<arr.length;i++) {
// // //     for(let j=arr.length-1;j>i;j--) {
// // //       if(arr[j] < arr[j-1]){
// // //         temp=arr[j]
// // //         arr[j] = arr[j-1]
// // //         arr[j-1] = temp
// // //       }
// // //     }
// // //   }
// // //   return arr
// // // }
// // // console.log(bubbleSort([3,6,4,1,2,5]));

// // const bubbleSort = (arr) => {
// //   let temp
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = arr.length - 1; j > i; j--) {
// //       if (arr[j] < arr[j - 1]) {

// //         temp = arr[j]
// //         arr[j] = arr[j - 1]
// //         arr[j-1] = temp
// //       }
// //     }
// //   }
// //   return arr
// // }

// // console.log(bubbleSort([3,1,4,2,6,5]));

// const bubbleSort = (arr) => {
//   let temp
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j > i; j--) {
//       if (arr[j - 1] > arr[j]) {
//         temp = arr[j - 1]
//         arr[j - 1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }
// console.log(bubbleSort([3,1,6,4,2,5]));

const bubbleSort = (arr)=>{
  let temp,exchange =0
  for(let i=0;i<arr.length-1;i++) {
    for(let j = arr.length-1;j>i;j--) {
      if(arr[j-1]> arr[j]) {
        temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        exchange = 1
      }
    }
    if(exchange == 0) {
      return
    }
  }
  return arr
}
console.log(BubbleSort([3,1,6,4,2,5,34,23,32,31,65]));


function BubbleSort(arr) {
  let tag =0
  for(let i=0;i<arr.length-1;i++) {
    for(let j= arr.length-i;j>i;j--) {
      if(arr[j-1]>arr[j]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
         tag =1
      }   
    }
    if(tag ==0) {
      return
    }
  }
  return arr
}