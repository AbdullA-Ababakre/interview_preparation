class Event{
	constructor() {
	    this.events={};
	}
	
	on(eventName,callback){
		if(this.events[eventName]){
			this.events[eventName].push(callback);
		}else{
			this.events[eventName]=[callback];
		}
	}
	
	trigger(eventName){
		if(this.events[eventName]){
			this.events[eventName].forEach((cb)=>{
				cb.call(null);
			})
		}
	}
}

let event=new Event();
event.on('click',()=>{
	console.log("clicked");
})

event.trigger('click');
