function Person(name,age){
	this.name=name;
}

Person.prototype.sayName=function(){
	console.log(this.name);
}

function Programmer(name,job){
	Person.call(this,name);
	this.job=job;
}

Programmer.prototype=Object.create(Person.prototype,{
	constructor:{
		value:Programmer
	}
})

Programmer.prototype.sayJob=function(){
	console.log(this.job);
}

let coder=new Programmer('Tom',23);
console.log(coder);


















