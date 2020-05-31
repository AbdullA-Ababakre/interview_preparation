function Subject(){
	this.observers=[];
	
	this.addObserver=function(observer){
		this.observers.push(observer);
	}
	
	this.removeObserver=function(observer){
		let index=this.observers.findIndex(observer);
		this.observers.splice(index,1);
	}
	
	this.notifyObserver=function(){
		let len=this.observers.length;
		for(let i=0;i<len;i++){
			this.observers[i].update();
		}
	}
}

function Observer(){
	this.update=function(){
		console.log("I was updated");
	}
}

let xiaoxin=new Observer();
let daxin=new Observer();

let zhubo=new Subject();
zhubo.addObserver(xiaoxin);
zhubo.addObserver(daxin);
zhubo.notifyObserver();



