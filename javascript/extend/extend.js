function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.getName=function(){
	console.log(this.name);
}

function Programmer(name,age,job){
	Person.call(this,name,age);
	this.job=job;
}

// Programmer.prototype=new Person();
// Programmer.prototype.constructor=Programmer;

// Programmer.prototype=Object.create(Person.prototype,{
// 	constructor: {
// 	    value: Programmer,
// 	    enumerable: false,
// 	    writable: true,
// 	    configurable: true
// 	  }
// });

inheritProto(Programmer,Person);

Programmer.prototype.getJob=function(){
	console.log(this.job);
}

let program=new Programmer('Abdulla',23,'programmer');
console.log(program);

function inheritProto(Child,Parent){
	let protoType=Object.create(Parent.prototype);
	protoType.constructor=Child;
	Child.prototype=protoType;
}

for(let key in program){
	if(Object.hasOwnProperty(key)){
		console.log(key);
	 }
}




