let arr=[1,2,3,4,10];
for(let [key,value] of arr.entries()){
	console.log(key,value);
}
// 0 1
// 1 2
// 2 3
// 3 4
// 4 10

for(let key of arr.keys()){
	console.log(key);
} //0,1,2,3,4 


 let iterator = arr.values();
 for (let letter of iterator) {
 console.log(letter); 
}  // 1,2,3,4,10



