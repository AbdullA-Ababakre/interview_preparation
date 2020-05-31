

function getBiggerNum(arr){
	arr.sort((a,b)=>{
		return a-b
	});
	
	let set=new Set(arr);
	let newArr=[];
	for(let key of set.values()){
		newArr.push(key);
	}
	console.log(newArr)
	// for(let i=0;i<arr.length-1;i++){
	// 	let item=arr[i];
	// 	
	// }
	
}

let arr=[1,2,1];
getBiggerNum(arr);