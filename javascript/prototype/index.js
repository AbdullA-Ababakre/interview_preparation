function Parent(value){
	this.val=value;
}

Parent.prototype.getValue=function (){
	return this.val;
}

// let parent=new Parent(1);
// console.log(parent.val);
// console.log(parent.getValue());

function Child(value){
	Parent.call(this,1);
};

Child.prototype=new Parent();
const child=new Child(1);
console.log(child.val);
console.log(child.getValue());

