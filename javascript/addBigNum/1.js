function sumString(a, b) {
  // 转为字符串
  a = "0" + a;
  b = "0" + b;
  // 转为数组
  let arrA = a.split("");
  let arrB = b.split("");
  // 获取两个数组的长度的最大值
  let maxLen = Math.max(arrA.length, arrB.length);
  for (let i = 0; i < maxLen - arrA.length; i++) {
    arrA.unshift("0");
  }
  for (let i = 0; i < maxLen - arrB.length; i++) {
    arrB.unshift("0");
  }
  let res = [];
  //相加的值
  let temp = "";
  //同位数相加结果大于等于10时为1，否则为0
  let carry = 0;

  for (let i = maxLen - 1; i >= 0; i--) {
    temp = Number(arrA[i]) + Number(arrB[i]) + carry;
    if (temp >= 2) {
      carry = 1;
      res.unshift((temp + "")[1]);
    } else {
      carry = 0;
      res.unshift(temp);
    }
  }
  res = res.join("").replace(/^0/g, "");
  return res;
}

// let num1 = 10000000000000000000000;
// let num2 = 11111111111111111111111111;
let num1 = 10000099;
let num2 = 1111111;
//          11111210
let res = sumString(num1, num2);
console.log(res);
