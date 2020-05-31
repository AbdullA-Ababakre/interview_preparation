// // Javascript是静态作用域，就是函数定义的时候作用域已经被定义
// 
// // JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。
// 
// 
// var value = 1;
// 
// function foo() {
//     console.log(value);
// }
// 
// function bar() {
//     var value = 2;
//     foo();
// }
// 
// bar();
// 
// 
// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f();
// }
// 
// let res=checkscope();
// console.log(res);
// 
// 
// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }
// 
// let res1=checkscope()();
// console.log(res1);
// 
// 
// var a = 10;
// var o = {
//      a:11,
//      b:{
//          fn:function(){
//               console.log(a);
//          }
//      }
// }
// o.b.fn();
// 
// 
function foo() {
console.log(value);
}
function bar() {
value = 2;
foo();
}
var value = 1;
bar();


// function foo() {
// console.log(value);
// }
// 
// function bar() {
// var value = 2;
// foo();
// }
// var value = 1;
// bar();