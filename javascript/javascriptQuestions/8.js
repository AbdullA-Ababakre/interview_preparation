let arr=[1,2,1,2,3];
let set=new Set(arr);
let num;
for(let i=0;i<arr.length;i++){
	if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
		num=arr[i];
	}
}

console.log(num);