let count = 0;
let arr = [1, 0, 3, 4];
let n = arr.length;

let max = Math.max(...arr);

while (true) {
  if (max >= n) {
    for (let i = 0; i < n; i++) {
      if (max === arr[i]) {
        arr[i] = arr[i] - n;
      } else {
        arr[i] += 1;
      }
    }
    max = Math.max(...arr);
    count++;
  } else {
    break;
  }
}

console.log(count);
