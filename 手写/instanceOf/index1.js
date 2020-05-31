// 做对这道题目的关键是要知道__proto,prototype等

function myInstanceOf(L, R) {
  let r = R.prototype;
  let l = l__proto__;
  while (true) {
    if (l === null) {
      return false;
    }
    if (r === l) {
      return true;
    }
    l = l__proto__;
  }
}

console.log(auto instanceof Car);
console.log(auto instanceof Object);
