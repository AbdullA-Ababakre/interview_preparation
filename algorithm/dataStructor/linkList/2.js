class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
  }
}

class LinkList{
    constructor(){
        this.size=0;
        this.head=null;
    }
    insertFirst(data){
        this.head=new Node(data,this.head);
        this.size++;
    }
    insertLast(data){
		if(!this.head){
			this.insertFirst(data);
			return ;
		}else{
			let current=this.head;
			let node=new Node(data,null);
			while(current.next){
				current=current.next;
			}
			current.next=node;
		}
		this.size++;
    }
	
	insertAtIndex(data,index){
		if(index<0 || index>this.size ){
			return ;
		}
		
		let node=new Node(data);
		// index=0;
		if(index===0){
			this.insertFirst(data);
			return ;
		}else{
			let current=this.head;
			let previous;
			let count=0;
			while(count<index){
				previous=current;
				count++;
				current=current.next;
			}
		}
		this.size++;
	}
	
	// removeAtIndex
	removeAtIndex(index){
		if(index<0 || index>=this.size){
			return ;
		}
		
		let current=this.head;
		if(index==0){
			this.head=current.next;
		}else{
			let previous;
			let count=0;
			while(count<index){
				previous=current;
				count++;
				current=current.next;
			}
			previous.next=current.next;
		}
		this.size--;
	}
	
	// getAtIndex
	getAtIndex(index){
		if(index<0 || index>=this.size){
			return ;
		}
		
		let current=this.head;
		let count=0;
		while(current){
			if(count===index){
				console.log('index data',current.data);
			}
			count++;
			current=current.next;
		}
		
	}
	
	// clearAll
	clearAll(){
		this.size=0;
		this.head=null;
	}
    
    printList(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

let list=new LinkList();

list.insertFirst(100);
list.insertLast(200);
list.insertLast(300);
list.getAtIndex(2);
list.printList();














