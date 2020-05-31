let a = (function () {
  let count = 0;
  return function () {
    count++;
    if (count % 2 === 1) {
      console.log(1);
    } else {
      console.log(2);
    }
  };
})();

a();
a();
a();
a();
a();
a();
