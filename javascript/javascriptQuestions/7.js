const nums=[2,19, 7, 11, 15];
nums.sort((a,b)=>a-b);
console.log(nums);
let target = 9;

let resArr=[];
for(let i=0;i<nums.length;i++){
	for(let j=i+1;j<nums.length;j++){
		if(nums[i]+nums[j]===target){
			resArr.push(i,j);
		}
	}
}

console.log(resArr);