var result = [];
var a = 3;
var total = 0;

function foo(a) {
  debugger;
  var i = 0;
  for (; i < 3; i++) {
    result[i] = function () {
      total += i * a;
      console.log(total);
    };
  }
}

foo(1);
result[0]();
result[1]();
result[2]();
