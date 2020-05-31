let name={
	firstName:'Abdulla',
	lastName:'Ababakre'
}

function printName(){
	console.log(this.firstName+' '+this.lastName);
}

printName.call(name);