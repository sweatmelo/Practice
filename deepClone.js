// function deepClone(obj) {
//   let dobj ={}
//   if(typeof obj !='object') return obj
//   if(Array.isArray(obj)) {
//     dobj = []
//    obj.forEach(e=>{
//      dobj.push(deepClone(e))
//    })
//     return dobj
//   }
//   //const dobj = {}
//   for(let item in obj){
//     if(obj.hasOwnProperty(item)) {
//       dobj[item] = deepClone(obj[item])
//     }
//   }
//   return dobj
// }
// function type(obj) {
//   var toString = Object.prototype.toString;
//   var map = {
//       '[object Boolean]'  : 'boolean', 
//       '[object Number]'   : 'number', 
//       '[object String]'   : 'string', 
//       '[object Function]' : 'function', 
//       '[object Array]'    : 'array', 
//       '[object Date]'     : 'date', 
//       '[object RegExp]'   : 'regExp', 
//       '[object Undefined]': 'undefined',
//       '[object Null]'     : 'null', 
//       '[object Object]'   : 'object'
//   };
//   return map[toString.call(obj)];
// }
// function deepClone(data) {
//   var t = type(data), o, i, ni;
  
//   if(t === 'array') {
//       o = [];
//   }else if( t === 'object') {
//       o = {};
//   }else {
//       return data;
//   }
  
//   if(t === 'array') {
//       for (i = 0, ni = data.length; i < ni; i++) {
//           o.push(deepClone(data[i]));
//       }
//       return o;
//   }else if( t === 'object') {
//       for( i in data) {
//           o[i] = deepClone(data[i]);
//       }
//       return o;
//   }
// }

function deepClone(obj = {}) {
  // obj是null或undefined（注意这里使用的==不是===）或者不是对象和数组，直接返回
  if (typeof obj !== 'object' || obj == null) {
      return obj
  }
  // 初始化返回结果
  let result
  if (obj instanceof Array) {
      result = []
  } else {
      result = {}
  }
  for(let key in obj) {
      // 保证 key 不是原型的属性
      if (obj.hasOwnProperty(key)) {
          // 递归
          result[key] = deepClone(obj[key])
      }
  }
  // 返回结果
  return result
}
let arr = [1,2,3]
for(let i in arr) {
  console.log(arr[i]);
} 


let a = {
  a:1,
  b:{
    c:arr
  }
}

let res = deepClone(a)
arr.push(6,7,8,9)
console.log(a.b.c);
