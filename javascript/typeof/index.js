var bool = true
var num = 1
var str = 'abc'
var und = undefined
var nul = null
var arr = [1,2,3]
var obj = {name:'haoxl',age:18}
var fun = function(){console.log('I am a function')}



// console.log(typeof bool);    //boolean
// console.log(typeof num);     //number
// console.log(typeof str);     //string
// console.log(typeof und);     //undefined
// console.log(typeof null);    //object
// console.log(typeof arr);     //object
// console.log(typeof obj);    //object
// console.log(typeof fun);    //function

// console.log(bool instanceof Boolean);  //false
// console.log(num instanceof Number);    //false
// console.log(str instanceof String);     //false
// // console.log(und instanceof undefined);  //报错，因为undefined不是对象   
// // console.log(null instanceof null);    //报错，因为null不是对象   
// console.log(arr instanceof Array);     //true   
// console.log(obj instanceof Object);    //true  
// console.log(fun instanceof Function);  //true
//    
// var bool2 = new Boolean()
// console.log(bool2 instanceof Boolean);// true
// 
// var num2 = new Number()
// console.log(num2 instanceof Number);// true
// 
// var str2 = new String()
// console.log(str2 instanceof String);//  true
// 
// function Person(){}
// var per = new Person()
// console.log(per instanceof Person);// true
// 
// function Student(){}
// Student.prototype = new Person()
// var haoxl = new Student()
// console.log(haoxl instanceof Student);// true
// console.log(haoxl instanceof Person);// true

console.log(Object.prototype.toString.call(bool));//[object Boolean]
console.log(Object.prototype.toString.call(num));//[object Number]
console.log(Object.prototype.toString.call(str));//[object String]
console.log(Object.prototype.toString.call(und));//[object Undefined]
console.log(Object.prototype.toString.call(nul));//[object Null]
console.log(Object.prototype.toString.call(arr));//[object Array]
console.log(Object.prototype.toString.call(obj));//[object Object]
console.log(Object.prototype.toString.call(fun));//[object Function]





