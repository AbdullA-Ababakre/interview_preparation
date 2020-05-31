function throttle(fn, limit) {
  let flag = true;
  return function () {
    if (flag == true) {
      fn();
      flag = false;
    } else {
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}
