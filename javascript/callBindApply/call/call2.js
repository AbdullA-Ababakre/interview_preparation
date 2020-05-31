let name={
	firstName:'Abdulla',
	lastName:'Ababakre'
}

function printName(arr){
	console.log(this.firstName+' '+this.lastName +' ' +arr);
}


Function.prototype.myCall=function(context,...args){
	let obj=context;
    let fn=Symbol();
	obj[fn]=this;
	obj[fn](...args);
	// 不要忘记调用之后删掉该属性，因为只是为了使用，我们用了
	delete context[fn];
};

let arrParam=[2,3];
printName.myCall(name,arrParam);