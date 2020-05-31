let name={
	firstName:'Abdulla',
	lastName:'Ababakre'
}

function printName(){
	console.log(this.firstName+' '+this.lastName);
}



// on proto,which enables to work on the all functions
Function.prototype.myBind=function(...args){
	// this->printName
	console.log(this);   // this=printName
	let that=this;
	return function(){
		that.call(args[0]);
	}
}

let printMyName=printName.myBind(name);
printMyName();
