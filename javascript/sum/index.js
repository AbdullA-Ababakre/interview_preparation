// function sum(a) {
// 	return function(b) {
// 		if (b) {
// 			return sum(a + b);
// 		} else {
// 			return a;
// 		}
// 	}
// }
//
// console.log(sum(1)(3)(4)());

// function sum(a){
// 	return function(b){
// 		return function(c){
// 			return a+b+c;
// 		}
// 	}
// }

function Sum(a, b) {
  return function (c) {
    return a + b + c;
  };
}

console.dir(Sum(1, 2)(3).valueOf());

let res = Sum(1, 2)(3);
console.log("res", res);
