// 题目描述
// 找出元素 item 在给定数组 arr 中的位置
// 输出描述:
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
// 示例1
// 输入
// [ 1, 2, 3, 4 ], 3
// 输出
// 2

// 1.indexOf()
// function indexOf(arr, item) {
//     let index=arr.indexOf(item);
// 	return index;
// }
// let arr=[ 1, 2, 3, 4 ];
// let item=3;
// let res=indexOf(arr,item);
// console.log(res);

// function insert(arr, item, index) {
//   let newArr=arr.splice(index,0,item);
//   return newArr;
// }
let arr=[1, 2, 3, 4];
// let item='z';
//  let index=2;
// let res=insert(arr,item,index);
// console.log(res);

arr.splice(2,0,10);
console.log(arr);



