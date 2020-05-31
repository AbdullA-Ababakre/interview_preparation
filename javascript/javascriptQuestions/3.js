// function duplicates(arr) {
//     let set=new Set();
//     for(let i=0;i<arr.length-1;i++){
//         if( (arr.indexOf(arr[i])!=-1) &&  (arr.slice(i+1).indexOf(arr[i])!=-1) ){
//            set.add(arr[i]);
//         }
//     }
//     
// 	let newArr=[];
// 	for(let item of set.keys()){
// 		newArr.push(item);
// 	}
// 	return newArr;
// }
// 
// let arr=[1, 2, 4, 4, 3, 3, 1, 5, 3];
// let res=duplicates(arr);
// console.log(res);



// 统计每一个item出现次数
// function duplicates(arr) {
// 	let obj={};
// 	let len=arr.length;
// 	for(let i=0;i<len;i++){
// 		let item=arr[i];
// 		if(obj[item]){
// 			obj[arr[i]]++;
// 		}else{
// 			obj[item]=1;
// 		}
// 	}
// 	
// 	console.log(obj);
// 	
// 	let newArr=[];
// 	for(let n in obj){
// 		if(obj[n]>1){
// 			newArr.push(Number(n));
// 		}
// 	}
// 	return newArr;
// }
// 
// 
// 
// let arr=[1, 2, 4, 4, 3, 3, 1, 5, 3];
// let res=duplicates(arr);
// console.log(res);