function Foo() {
  this.name = "Abdulla";
}

// let foo = new Foo();
// console.log(foo); //Foo {name: "Abdulla"}

function myNew(...args) {
  let obj = {};
  obj.__proto__ = args[0].prototype;
  args[0].call(obj);
  return obj;
}

let foo1 = myNew(Foo);
console.log(foo1);
