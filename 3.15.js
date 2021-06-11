// function runSomething(o) {
//   let x = Math.floor(Math.random()*10),
//       y= Math.floor(Math.random()*10)

//       return o.something(x,y)
// }
// runSomething({
//   something: function something(x,y) {
//     if(x>y) {
//       return something(y,x)
//     }
//     return y-x
//   }
// })

// console.log(runSomething({
//   something: function something(x,y) {
//     if(x>y) {
//       return something(y,x)
//     }
//     return y-x
//   }
// }));


function throttle(fn,delay=300) {
  let now = new Date()
  let self = this
  return function() {
    let last = new Date()
    if(last - now>delay) {
      now = last
      fn.apply(self,arguments)
    }
  }
}

function debounce(fn,delay=300) {
  let time = null
  return function() {
    if(timer) {
     // time = null
     clearTimeout(time)
    } else {
       time = setTimeout(()=>{fn.apply(self,args),delay}
       ,delay)
    }
    
  }
}

function New(...arg) {
  let Con = arg[0]
 //let Con= [].shift.call(arguments);
  console.log(Con);
  let obj = new Object()
  obj.__proto__ = Con.prototype
  let res = Con.apply(obj,arg.slice(1))
  console.log(res);
  return typeof res == 'object' ? res : obj 
}


// function P(firstName, lastName) {
//   this.age = 10;
//   this.getName = function() {
//     return `${firstName} ${lastName}`;
//   };
// }

// function newF() {
//   let obj = new Object();
//   let Constructor = [].shift.call(arguments);
//   obj.__proto__ = Constructor.prototype;
//   let result = Constructor.apply(obj, arguments);
//   return typeof result === 'object' ? result : obj 
// }

// let p = newF(P, 'amanda', 'kelake');
// p.getName();


function NewF(Fn,...arg) {
  //let obj = {}
 // obj.__proto__ = Fn.prototype
 let obj = Object.create(new Fn())
  let res = Fn.apply(obj,arg)
  //console.log(obj.__proto__.say());
  return  typeof res == 'object'?res: obj
}

function P(firstName, lastName) {
  this.age = 10;
  this.getName = function() {
    return `${this.age} ${lastName}`;
  };
}
P.prototype.say = function() {
  console.log('object');
}
let p = NewF(P, 'amanda', 'kelake');
p.say()
console.log(p.getName());


class Point {
  constructor(x,y) {
    return Object.assign({x,y})
  }
}

let po =new Point(1,2)
console.log(po.x)