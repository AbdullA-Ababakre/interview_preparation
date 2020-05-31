let arr = [1, 2, 3, 3, 5, 5];
let set = new Set(arr);
// console.log(set);
for (let key in set.keys()) {
  console.log(key);
}
let newArr = Array.from(set);
console.log(newArr);
