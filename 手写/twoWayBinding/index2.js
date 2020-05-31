var bValue = 38;
var o = {}; // Creates a new object
Object.defineProperty(o, "b", {
  // Using shorthand method names (ES2015 feature).
  // This is equivalent to:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() {
    return bValue;
  },
  set(newValue) {
    console.log("set");
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
// let res = o.b; // 38
o.b = 43;
console.log(o.b);
