// 打通原型链
// 把属性方法给予实例

function Foo(name, age) {
  this.name = name;
  this.age = age;
}

function myNew(...args) {
  let obj = {};
  let context = args[0];
  let param = args;
  param.shift();

  obj.__proto__ = context.prototype;
  context.apply(obj, param);

  return obj;
}

let foo = myNew(Foo, "Abdulla", 23);
console.log(foo);
