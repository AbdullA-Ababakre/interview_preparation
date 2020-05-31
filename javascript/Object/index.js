const sym=Symbol();
let obj={
	[sym]:'Abdulla'
};
Object.defineProperty(obj, 'noIteration', {
  value: 4,
  enumerable: false
});


function checkEmpty(obj){
	for(let key in obj){
	  return true;
	}
	if(Object.getOwnPropertySymbols(obj)){
		return true;
	}
	if(Object.getOwnPropertySymbols(obj)){
		return true;
	}
	return false;
}

let res=checkEmpty(obj);
console.log(res);


