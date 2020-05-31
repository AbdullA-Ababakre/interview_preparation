function Foo(name) {
  this.name = name;
}

function objectFactory() {
  const obj = {};

  //   const Constructor = [].shift.call(arguments);
  let Constructor = arguments[0];
  obj.__proto__ = Constructor.prototype;
  //把构造函数，也就是Foo中的属性和方法给到我们新创建的实例中
  Constructor.apply(obj, [arguments[1]]);

  return obj;
}

let foo = objectFactory(Foo, "Abdulla");
console.log("obj", foo);
