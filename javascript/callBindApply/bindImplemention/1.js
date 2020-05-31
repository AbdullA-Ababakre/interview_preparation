// how to use bind 

let name={
	firstName:'Abdulla',
	lastName:'Ababakre'
}

function printName(){
	console.log(this.firstName+' '+this.lastName);
}

let printMyName=printName.bind(name);
printMyName();


