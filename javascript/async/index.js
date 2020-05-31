function f1() {
  console.log(1);
}

function f2(callback) {
  console.log(2);
  callback && callback();
}

// f1();
// f2();
f2(f1);
