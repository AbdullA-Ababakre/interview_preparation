class Node{
	constructor(data,next=null) {
	    this.data=data;
		this.next=next;
	}
}

class LinkedList{
	constructor() {
	    this.size=0;
		this.head=null;
	}
	
	insertFirst(data){
		this.head=new Node(data,this.head);
		this.size++;
	}
	
	insertLast(data){
		let node=new Node(data);
		let current;
		// check whether is empth
		if(!this.head){
			this.head=node;
		}else{
			current=this.head;
			while(current.next){
				current=current.next;
			}
			current.next=node;
		}
		this.size++;
	}
	
	insertAtIndex(data,index){
		if(index<0 || index>this.size){
			return ;
		}
		
		if(index===0){
			this.insertFirst(data);
			return;
		}
		
		let node=new Node(data);
		let current=this.head;
		let previous;
		let count=0;
		while(count<index){
			previous=current;
			current=current.next;
			count++;
		}
		previous.next=node;
		node.next=current;
		
		this.size++;
	}
	
	getAtIndex(index){
		// if(index<0 || index>=this.size || index===undefined){
		// 	return null;
		// }
		// 
		// let current=this.head;
		// let count=0;
		// if(index===0){
		// 	return current.data;
		// }else{
		// 	while(count<index){
		// 		current=current.next;
		// 		count++;
		// 	}
		// 	return current.data;
		// }
		
		let current=this.head;
		let count=0;
		
		while(current){
			if(count==index){
				return current.data;
			}
			count++;
			current=current.next;
		}
		
		return null;
	}
	
	removeIndex(index){
		if(index<0 || index>this.size){
			return ;
		}
		
		let current=this.head;
		let previous;
		let count=0;
		
		if(index===0){
			this.head=current.next;
		}else{
			while(count<index){
                previous=current;
				count++;
				current=current.next;
			}
			previous.next=current.next;
		}
		this.size--;
	}
	
	clearList(){
		this.head=null;
		this.size=0;
	}
	
	printList(){
		let current=this.head;
		while(current){
			console.log(current.data);
			current=current.next;
		}
	}

}

let list=new LinkedList();
list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(400);

list.printList();
