let name1={
	firstName:'Abdulla',
	lastName:'Ababakre',
	getFullName:function(){
		console.log(this.firstName+' '+this.lastName);
	}
}

let name2={
	firstName:'Alimjohn',
	lastName:'Ablat',
	getFullName:function(){
		console.log(this.firstName+' '+this.lastName);
	}
}


name1.getFullName.call(name2);