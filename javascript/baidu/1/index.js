// var n = parseInt(readline());
let n = 5;

let res = [];

function getLcm(a, b) {}

function getGcd(a, b) {}

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    let res1 = getLcm(i, j);
    let res2 = getGcd(i, j);
    res.push(res1 - res2);
  }
}

let result = Math.max(res);
console.log(result);
