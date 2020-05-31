let obj={
	name:'Abdulla',
	age:21
};

function getInfo(param){
	console.log(this.name+' '+this.age +' '+param );
}

Function.prototype.myBind=function (...args){
	let param=args.slice(1);
	let that=this;
	return function(){
		that.apply(args[0],param);
	}
}

const getValue=getInfo.myBind(obj,'SZU');
getValue();
