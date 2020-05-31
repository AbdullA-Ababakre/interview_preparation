function changeOrder(arr){
	for(let i=arr.length-1;i>=0;i--){
		if(arr[i]==0){
			arr.splice(i,1);
			arr.push(0);
		}
	}
	return arr;
}

let nums = [0,1,0,3,12];
let res=changeOrder(nums);
console.log(res);