const map = new Map([
	['(', -1],
	[')', 1],
	['[', -2],
	[']', 2],
	['{', -3],
	['}', 3]
]);



class Stack{
	constructor() {
	    this.stack=[];
	}
	push(item){
		this.stack.push(item);
	}
	pop(){
		this.stack.pop();
	}
	getCount(){
       return this.stack.length;
	}
    peek(){
		return this.stack[this.getCount()-1];
	}
	isEmpty(){
		return this.getCount()===0;
	}
}

let myStack=new Stack();

let str='()]{[}';

for(let i=0;i<str.length;i++){
	if(map.get(str[i])<0){
		myStack.push(str[i]);
	}else{
		if((map.get(str[i])+map.get(myStack.peek()))===0){
			myStack.pop();
		}
	}
}


if(myStack.isEmpty()){
	console.log(true);
}else{
    console.log(false);
}


