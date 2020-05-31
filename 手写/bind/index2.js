let obj = {
  name: "Abdulla",
};

function getName() {
  console.log(this.name);
}

function myBind(args) {
  let context = args[0];
  return function () {
    getName.call(context);
  };
}

Function.prototype.myBind = function (...args) {
  return function () {
    getName.call(args[0]);
  };
};

let res = getName.myBind(obj);
res();
