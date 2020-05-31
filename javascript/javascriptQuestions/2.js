// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入
// 
// [1, 2, 3, 4, 2], 2
// 输出
// 
// [1, 3, 4]

function remove(arr, item) {
	let len=arr.length;
   for(let i=len-1;i>=0;i--){
	   if(arr[i]===item){
		   arr.splice(i,1);
	   }
   }
   return arr;
}

let arr=[1, 2, 3, 4, 2];
let newArr=arr.pop();
console.log(newArr);

let item=2;
let res=remove(arr,item);
console.log(res);