let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function fib(n) {
  if (n >= 0 && n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

let res = fib(10);
console.log(res);

function fibSum(n) {
  let newArr = new Array(n + 1).fill(null);
  newArr[0] = 0;
  newArr[1] = 1;
  for (let i = 2; i <= n; i++) {
    newArr[i] = newArr[i - 1] + newArr[i - 2];
  }
  return newArr[n];
}

let result = fibSum(10);
console.log("result", result);
