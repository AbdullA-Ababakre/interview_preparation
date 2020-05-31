let getData = function() {
  console.log("getting data");
};

function doSomeMagic(fn, limit) {
  let flag = true;
  return function() {
    if (flag === true) {
      fn();
      flag = false;
    } else {
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

betterFunction = doSomeMagic(getData, 3000);
