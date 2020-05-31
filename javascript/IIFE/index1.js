let add = function () {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
};

add()();
add();
add();
