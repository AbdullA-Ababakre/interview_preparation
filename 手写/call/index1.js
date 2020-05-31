let obj = {
  name: "Abdulla",
  age: 23,
};

function getName() {
  console.log(this.name);
}

Function.prototype.myCall = function (context) {
  let fn = Symbol();
  context[fn] = this;
  context[fn]();
  delete context[fn];
};

getName.myCall(obj);
