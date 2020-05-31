var result = [];
var a = 3;
var total = 0;

function foo(a) {
  let i = 0; //3 6 9
  //   var i = 0;     //3 6 9
  for (; i < 3; i++) {
    result[i] = function () {
      console.log("in i", i);
      total += i * a;
      console.log(total);
    };
  }
}

foo(1);
result[0]();
result[1]();
result[2]();
// result[0]();
// result[1]();
// result[2]();
