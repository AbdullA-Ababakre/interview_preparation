var p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
    console.log("哈哈哈");
  }, 0);
});

p4.then(res => {
  console.log("1");
  console.log(res);
  console.log("2");
}).then(() => {
  console.log("第二次then");
});

// 哈哈哈
// 1
// 1000
// 2
// 第二次then
