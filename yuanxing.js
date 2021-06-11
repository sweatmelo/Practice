function Parent() {
  this.isShow = true
  this.info = {
      name: "yhd",
      age: 18,
  };
}

Parent.prototype.getInfo = function() {
  console.log(this.info);
  console.log(this.isShow); // true
}

function Child() {};
Child.prototype = Parent.prototype;

let Child1 = new Child();
//Child1.info.gender = "男";
//Child1.getInfo();  // {name: "yhd", age: 18, gender: "男"}

let child2 = new Child();
//child2.getInfo();  // {name: "yhd", age: 18, gender: "男"}
//child2.isShow = false

// console.log(child2.isShow); // false
// console.log(Child1.isShow);


// function Parent(age){
//   this.colors = ['red', 'yellow']
//   this.age = age
// }

// function Son(age, name){
//   // 优点：子类可以给父类传参，并且保证父类中的引用属性子类不共享，因为call传入的this是每个子类自己的
//   Parent.call(this, age)
//   this.name = name
// }

// Parent.prototype.getAge = function(){
//   console.log(this.age+'--'+this.name)
//   console.log(this.colors)
// }

// // 这里可以不传参，这一步使得Son和Parent有原型联系，子类实例可以调用父类原型的方法
// // 但是这一步也导致Son.prototype上也有一个colors
// Son.prototype = new Parent()

// let son1 = new Son(18, 'John')
// let son2 = new Son(20, 'Bob')

// son1.colors.push('pink')

// son1.getAge() // 18--John ['red', 'yellow', 'pink']
// son2.getAge() // 20--Bob ['red', 'yellow']
// console.log(Son.prototype.colors);

// function Parent (name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }

// Parent.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child (name, age) {
//   Parent.call(this, name);
//   this.age = age;
// }

// // 注意下面这3行代码，代替了 Child.prototype = new Parent() 
// // 借助了 `空对象 F` 作为父类和子类的中间连接点，这样就不会出现组合模式的弊端（在Child.prototype上增加不必要的多余属性，并且减少了Parent()的调用次数）
// var F = function () {};
// F.prototype = Parent.prototype;
// Child.prototype = new F();
// ///

// var child1 = new Child('kevin', '18');

// console.log(child1);

function Parent() {
  this.name = 'a'
}
Parent.prototype.getName = function() {
  return this.name
}

function Child() {
  Parent.call(this)
  this.age ='22'
}

let F= function() {}
F.prototype = new Parent()
//let F = Object.create(Parent)
Child.prototype = new F()
const c= Object.create(new F())
console.log(c.getName());
let b = new Child()
console.log(b.age);


// console.log('1')
// setTimeout(function() {
//   console.log('2')
//   new Promise(function(resolve) {
//     console.log('4')
//     resolve()
//   }).then(function() {
//     console.log('5')
//   })
//   setTimeout(() => { console.log('6') })
//   new Promise(function(resolve) {
//     console.log('7')
//     resolve()
//   }).then(function() {
//     console.log('8')
//   })
// })

// setTimeout(function() {
//   console.log('9')
// }, 0)
// new Promise(function(resolve) {
//   console.log('10')
//   resolve()
// }).then(function() {
//   console.log('11')
// })

// setTimeout(function() {
//   console.log('12')
//   new Promise(function(resolve) {
//     console.log('13')
//     resolve()
//   }).then(function() {
//     console.log('14')
//   })
// })
// new Promise(function(resolve) {
//   console.log('15')
//   resolve()
// }).then(function() {
//   console.log('16')
// })

// function flatten(arr) {
//   let res = new Array()
//   arr.forEach(e => {
//     res= res.concat(Array.isArray(e)? flatten(e): e)
//   })
//   return res
// }

// console.log(flatten([1,2,[3,4,[5,6]]]));