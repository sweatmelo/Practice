/**
 * 浅拷贝 赋值新对象到源对象，返回值是源对象
 */

let a1 = {a:1,b:2,c:{d:3}}
let a2 = {foo:'foo',bar:'bar'}
let source = {name: 'sweatmelo'}
source = Object.assign(source,a1,a2)
console.log(source)

/**
 * 继承属性  eumnable? no
 */

 const obj = Object.create({foo:1},{bar:{value:2,enumerable:true}})
 const obj1 = {foo:'foo'}
 obj1.__proto__.a =1
 console.log({},obj1);