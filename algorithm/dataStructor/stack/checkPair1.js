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
let str='()[]}{';
for(let i=0;i<str.length;i++){
	if(str[i]==='(' || str[i]==='[' || str[i]==='{'){
		myStack.push(str[i]);
	}else{
		if(str[i]===')'){
			if(myStack.peek()==='('){
				myStack.pop();
			}
		}
		
		if(str[i]===']'){
			if(myStack.peek()==='['){
				myStack.pop();
			}
		}
		
		if(str[i]==='}'){
			if(myStack.peek()==='{'){
				myStack.pop();
			}
		}
	}
}

if(myStack.isEmpty()){
	console.log(true);
}else{
    console.log(false);
}


