// function curry(fn,args) {
//    args = args || []
//   console.log(fn);
//   return function() {
//     console.log(args);
//      _args =args.concat([...arguments])
//      console.log(_args);
//     if(fn.length > _args.length){  
//       return curry(fn,_args)
//     }  
//     else
//     {
//       console.log(_args);
//       return fn.apply(this,_args)
//     }
//   }
// }


function curry(fn){
   let args = []
  return function curried(arg){
    args.push(arg)
      if(fn.length>args.length){
        return function(arg){
          return curried.call(this,arg)
        }
      }
      else{       
           return fn.apply(this,args) 
      }
  }
}

function sun(a,b,c) {
 // console.log(sun.length);
  return a+b+c
}

// function Curry(fn) {
//   let args = []
//   return function curried(arg) {
//     args.push(arg)
//     if(fn.length >= args.length) {
//       return function(arg1){
//         return curried.call(this,arg1)
//       }  
//     } else { 
//         return fn.apply(this,args)
      
//     }
//   } 
// }


function Curry(fn) {
  let arg = []  //存参数的数组
  return function curried(args) {
    //console.log(args);
    if(fn.length >= arg.length) {
       return function(arg1) {
         console.log(arg1);
       return curried.call(this,arg1)
       }
    } else {
      return fn.apply(this,arg)
    }
  }
}

let sunCurry = Curry(sun)
console.log(sunCurry(1)(2)(5)());

