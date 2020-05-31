// // 定义一个设置属性 setter 和 getter 的方法
// function defineProperty(obj, attr, value){
//   // 私有变量 value
//   var value;
// 
//   Object.defineProperty(obj, attr, {
//     get:function (){
//       console.log('获取属性值' + value);
//       return value;
//     },
//     set:function (val){
//       console.log('修改属性值为 ' + value); 
//       value = val;
//       console.log('修改属性值'); 
//     }
//   })
// 
//   // 设置属性值
//   obj[attr] = value;
// }
// 
// // 通过使用 defineProperty 方法，设置 man 的 name 属性的数据变化监听
// var man = {};
// defineProperty(man, 'name', "cover"); // 修改属性值为 cover
// man.name; // 获取属性值 cover
// man.name = 'kevin'; // 修改属性值为 kevin

// let obj={};
// Object.defineProperty(obj,'property1',{
// 	let value;
// 	set:function(val){
// 		value=val;
// 	},
// 	get:function(){
// 		console.log(value);
// 		return value;
// 	}
// 	
// });
// 
// obj.property1='Abdulla';

let o = {};
let bvalue;
Object.defineProperty(o, 'b', {
	// Using shorthand method names (ES2015 feature).
	// This is equivalent to:
	// get: function() { return bValue; },
	// set: function(newValue) { bValue = newValue; },
	get() {
		return bValue;
	},
	set(newValue) {
		bValue = newValue;
	},
	enumerable: true,
	configurable: true
});

o.b=43;
console.log(o.b);
