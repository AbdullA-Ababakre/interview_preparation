<!-- ES6 -->

es6 新特性
let、const
变量提升
ES6 你最喜欢的特性 我说 let，箭头函数，Promise（应该不是 es6 的特性）。还说自己遇到过回调地狱，作用域 bug，函数 this 指向问题等等。
weakmap 了解吗
Let map = {}和 new Map()有什么区别
symbol

<!-- 类型,判断类型,类型转换 -->

基本数据类型哪些
typeof 可以判断几种类型的数据
如何判断一个对象是不是 array
检测数据类型的方法有哪几种（typeOf 、instanceof、constructor、Object.prototype.toString.apply()）
判断类型 typeof、 instanceof、Object.prototype.toString.call() （这个我都忘了）
js 有哪些数据类型，举几个 object
+obj 是怎么计算的  https://github.com/Aaaaaaaty/blog/issues/14

<!-- 继承 -->

继承方式 归纳为三类。原型，构造，组合。其他大多是这三种的变种。
用函数实现一个类以及继承（写了一大堆，也不知对错）
手写继承机制
继承属性和方法
js 继承, 手写代码
一个混 this 和原型的程序 问输出
原型、原型链的区别
class 做了什么事
Object.create()相关
0.1+0.2 == 0.3？原因？
JS 浮点数精度问题，原因及解决方案

<!-- 闭包 -->

简述闭包
写函数实现一秒钟输出一个数组
给你一个数组根据时间按顺序每秒钟输出一个元素以及其下标
//实现 counter 函数
function counter(v) {...}
const c = counter(3)
console.log(c.add()) // 4
console.log(c.sub()) // 3
c.add()
console.log(c.add()) // 5

<!-- 对象 -->

循环对象的方法有哪几种以及它们的区别（Object.keys() 、for of 、for in）
对象的属性都是什么类型 //只可以是字符串和 Symbol 类型,如果是数字等的话，会被转成字符串
如何判断一个对象是空对象
如何判断一个对象是不是空对象？
判断空对象为空的方法，大约是写出隐式转换的底层代码
如何实现对象的深拷贝，考虑对象嵌套问题代码实现对象深拷贝（手撕失败，）
JS 不是面向对象的解释
面向对象的特点
// 深拷贝 浅拷贝
var a = {x:1}
var b = a;
a = a.x = {x:1}
console.log(a); // {x:1}
console.log(b); // {x:{x:1}}

<!-- 正则 -->

手写正则表达式判断电话号码
let reg=/^1[34578]\d{9}\$/;
判断 QQ 号

<!-- 大数相加 -->

实现大数相加
Number()的存储空间是多大，如果后台发送了一个超过最大字节的数字怎们办

<!-- 其他 -->

实现拖拽一个元素 说的是监听鼠标的 mouseup 和 mousedown，并且在 callback 里用鼠标的 position 赋值给元素的 position。
如何判断一行汉字有没有出现省略号（只是单行的）
getelementbyid.innerhtml 和 innertext 区别
数组中两数之和等于第三个数，不难吧，做过吧。
我说：“我做过 n 个数找等于 n 的！”
字符串转驼峰 aa-bb-cc/aa_bb_cc => aaBbCc

获取后面的参数 https://www.nowcoder.com/discuss/158773?toCommentId=5349097&id=123456&key=1,2,3,4,5

<!-- promise -->

promise 用法、构造函数、状态
promise 与 setTimeout 组合的输出顺序（异步）
用 promise 写一个 delay 函数。
实现 promise
promise 捕获错误的方式。这里我还联系了一下我之前做过的项目中的实际场景。
Promise()
js 实现异步有哪些方法？
浏览器事件循环, 代码看输出
then 方法可以传几个参数？（一个？两个？不清楚）
// 微任务 解释一下代码
setTimeout( ()=>{ console.log(1)};
setTimeout( ()=>{ console.log(2), 0} );
console.log(3);
Promise.resolve.then( ()=>{ console.log(4), 0} );
console.log(4);
setTimeout( ()=>{ console.log(2), 10} );
// 闭包 作用域 异步
for(var i; i < 5; i++) {
setTimeout(function() {
console.log(new Date(), i);
}, 1000)
}

//解释代码
console.log(1)
new Promise((resolve) => {
resolve();
console.log(2)
}).then(() => {
console.log(3)
});
setTimeout(function(){
console.log(4)
}, 0);
console.log(5)

<!-- 防抖和节流 -->

手写防抖和节流
说明一下防抖和节流，代码实现他们
函数的节流
（看了看简历，用到了防抖）防抖节流各是什么 有什么区别
高阶函数 + 手写防抖

<!-- 实现call,bind,apply -->

call、apply、bind
手写 call bind apply 内部实现
自己实现 call（不会）
