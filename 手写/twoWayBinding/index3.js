let obj = {};
bvalue = 38;

Object.defineProperty(obj, "b", {
  get: function () {
    return bvalue;
  },
  set: function (val) {
    console.log("1");
    bvalue = val;
  },
});

obj.b = 40;
console.log(obj.b);
