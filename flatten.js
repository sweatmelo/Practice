// const flat = (arr)=>{
//   let array= []
//   arr.forEach(element => {
//     if(Array.isArray(element)){
//       array = array.concat(flat(element))
//     }else {
//       array = array.concat(element)
//     }
//   })
//   return array
// }

// console.log(flat([1,2,[3,4,[5,[3]]]]));

const flatten = (arr)=>{
  return arr.reduce((pre,cur)=>{
    return pre.concat(Array.isArray(cur)? flatten(cur):cur)
  },[])
}

console.log(flatten([1,2,[4,5,[5,6]]]));