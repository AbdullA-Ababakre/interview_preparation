// Subject 目标
function Subject(){
	this.observers=[];
}
// 增加观察者
Subject.prototype.addObserver=function(observer){
	this.observers.push(observer);
};
// 去除观察者
Subject.prototype.removeObserver=function(observer){
	let index=this.observers.indexOf(observer);
	this.observers.splice(index,1);
}
// 通知观察者
Subject.prototype.notify=function(context){
	let observerLength=this.observers.length;
	// 循环调用所有观察者update
	for(let i=0;i<observerLength;i++){
		this.observers[i].update(context);
	}
}

// 观察者
function Observer(){
	// 更新操作
	this.update=function(){
		// ...
	}
}

let littleXin=new Observer('小新');
let  bigXin=new Observer('大新');

let ladyD=new Subject('主播D');
// 增加观察者小新和大新
ladyD.addObserver(littleXin);
ladyD.addObserver(bigXin);