function getData() {
  console.log("get Data");
}

function throttle(fn, limit) {
  let flag = true;
  return function() {
    if (flag == true) {
      fn();
      flag = false;
    } else {
      setTimeout(function() {
        flag = true;
      }, limit);
    }
  };
}

let betterFunction = throttle(getData, 3000);

window.addEventListener("resize", betterFunction);
