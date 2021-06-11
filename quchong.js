// function unique1(arr) {
//   return [...new Set(arr)]
// }
// function unique2(arr) {
//   for(let i=0;i<arr.length;i++) {
//     for(let j=i+1;j<arr.length;j++) {
//       if(arr[i] == arr[j]) {
//         arr.splice(j,1)
//         j--
//       }
//     }
//   }
//   return arr
// }

// console.log(unique2([1,2,11,2,45,5,5]));

function a(arr) {
  let res =  arr.reduce((pre,cur)=>{return pre+=cur},0)
  return res
}

console.log(a([1,2,3]));