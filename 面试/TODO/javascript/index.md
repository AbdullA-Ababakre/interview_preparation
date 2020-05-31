<!-- 实现call,bind,apply -->
<!-- 防抖和节流 -->
<!-- 大数相加 -->

大数相加（递归加非递归），递归实现出来说优化点并讲解

<!-- 其他 -->

let var const 有什么区别

数组扁平
实现一个 sum 函数使得 sum(1, 2, 3).valueOf()和 sum(1)(2)(3).valueOf()执行输出的结果都等于 6
实现一个 sum 函数，可以实现 sum(2, 3)(4), console.log(sum)输出 9, 如果不能实现直接输出可调用 sum.value()输出结果

this 指向问题，看输出
this 的几种情况
js 宽松模式和严格模式区别

Fibonacci 函数 之后进行进行 memory 优化 【要求不能改参数和执行方式】
手动实现 Array.reduce()
垃圾收集机制讲一下 两种的区别 为啥引用计数不常用
浏览器事件循环
node.js 有任务队列吗？ 事件循环
如何实现渲染后台传来的 html 片段
new 的过程
你觉得 typescript 和 javascript 有什么区别
typescript 你都用过哪些类型
typescript 中 type 和 interface 的区别

<!-- promise 比较难的部分 -->

Promise 原理
写出这段代码的输出结果
function createTask(ms) {
return () => {
console.log('start', ms);
return new Promise(r => setTimeout(() => {
console.log('end', ms);
r(ms);
}, ms));
}
}
const tasks = Array(5).fill(null).map((\_, i) => createTask(i \* 1000));
Promise.all(tasks.map(task => task())).then(console.log);
接上一题，实现限制同时运行任务数的函数 limitRunTask
//
表示同时只能有 2 个任务运行，且 then 中得到的数组顺序和通过 Promise.all 得到的一致
limitRunTask(tasks, 2).then(console.log);

function limitRunTask(tasks, limit) {
return new Promise((resolve, reject) => {
let index = 0;
let alive = 0;
let finish = 0;
let result = [];
function trigger() {
if (finish >= tasks.length) {
resolve(result);
return;
}
while (alive < limit && index < tasks.length) {
alive ++;
const promise = tasks[index]();
const curIndex = index;
promise.then(value => {
alive --;
finish ++;
result[curIndex] = value;
trigger();
});
index ++;
}
}
trigger();
});
}
在有并发数 max 限制的前提下, 最高效地发送完所有请求, 当所有请求返回后执行 callback, 发请求的函数用 fetch 即可

async await promise 介绍一下
async await,babel 转化后，它是怎么执行 async await 内部实现的原理
我回答说还是 callback
async awiat 通过 babel 来转化，最终的转化是怎么实现的
15.async await是怎么编译的 你用过babel吗？ 
