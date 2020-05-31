// for(let i=0;i<5;i++){
//    setTimeout(()=>{
// 	   console.log(i);
//    },1000*i);
//    console.log("i",i);
// }

// for (let i = 0; i < 5; i++) {
// 	(
// 		function(j) {
// 			setTimeout(() => {
// 				console.log(j)
// 			}, 1000 * j);
// 		}
// 	)(i);
// }

// let arr=[10,11,12,13,14];
// for(let i=0;i<arr.length;i++){
// 	setTimeout(()=>{
// 		console.log(arr[i],i);
// 	},1000*i);
// }

function counter() {
  let count = 0;
  function addCount() {
    count++;
    console.log(count);
  }
  return addCount;
}

let res = counter();
res();
res();
res();
res();
res();
res();
