// 1.通过min来实现
let myStack = [1, 10, 13, 0, -9];
 let min = Math.pow(2, 53);
 for (let i = 0; i < myStack.length; i++) {
 	if (min > myStack[i]) {
 		min = myStack[i];
 	}
 }
 console.log(min);

// 2.通过sort方法来排序
 myStack = myStack.sort((a, b) => {
 	return a - b;
 });
 console.log(myStack[0]);


// 通过es6的语法
 myStack=Math.min(...myStack);
 console.log(myStack);