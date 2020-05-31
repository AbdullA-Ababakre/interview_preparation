// 因为JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置。

var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}
let res = checkscope();
console.log(res);

// var scope = "global scope";
// function checkscope() {
//   var scope = "local scope";
//   function f() {
//     return scope;
//   }
//   return f;
// }
// checkscope()();
