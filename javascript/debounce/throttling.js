function getData() {
  console.log("get data");
}

let limit = 3000;

const throttle = function (getData, limit) {
  let flag = true;
  return function () {
    if (flag == true) {
      getData();
      flag = false;
    } else {
      setTimeout(function () {
        flag = true;
      }, limit);
    }
  };
};

const betterGetData = throttle(getData, limit);
window.addEventListener("resize", betterGetData);
