let s1 = "get-element-by-id";

function f(str) {
  return str.replace(/-\w/g, function (x) {
    console.log("x", x);
    return x.slice(1).toUpperCase();
  });
}

let res = f(s1);
console.log(res);
