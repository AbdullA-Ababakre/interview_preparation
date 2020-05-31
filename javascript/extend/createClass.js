// 工厂模式
function createBottle(name, price) {
	return {
		name: name,
		price: price,
		sayName: function() {
			console.log(this.name);
		}
	}
};

let bottle=createBottle('Abdulla',23);
console.log(bottle);       //Object {name: "Abdulla", price: 23}
// 不能通过instanceof来证明，不能证明是实例
console.log(bottle instanceof createBottle); //false



//构造函数
// function Bottle(name,price){
// 	this.name=name;
// 	this.price=price;
// 	function sayName(){
// 		console.log('my name is ' + this.name);
// 	}
// };
// 
// let bottle1=new Bottle('Abdulla',23);
// let bottle2=new Bottle('Ababakre',47);
// console.log(bottle1);
// console.log(bottle2);
// console.log(bottle1 instanceof Bottle);
// console.log(bottle2 instanceof Bottle);
// 可以证明bottle是Bottle的实例
// 但方法创建存在问题，因为每一个实例会重新创建一个方法

// 原型链
function Bottle(name,price){
	this.name=name;
	this.price=price;
}

Bottle.prototype.sayName=function (){
	console.log(this.name);
}

let bottle1=new Bottle('Abdulla',23);
let bottle2=new Bottle('Ababakre',49);
console.log(bottle1 instanceof Bottle);   //true
console.log(bottle2 instanceof Bottle);   //true
bottle1.sayName();
bottle2.sayName();
