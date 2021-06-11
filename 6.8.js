const handle = (e) => {
  console.log(e);
}

const test = _ => {
  handle
}
//test(3)

// function  fnc() {
// console.log(Array.from(arguments));
// }
let arr  = [62,2,7,2,0,11,21]
arr1 =arr.filter(e => {
  return e>30
})
// let arr1 = arr.reduce((pre,cur)  => 
//    pre+cur
// ,0)
// let arr1 = [3,4,5]
// Array.prototype.toString = () => {
//   return '1234'
// }
console.log(arr1);