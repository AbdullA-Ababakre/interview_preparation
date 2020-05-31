let count = 0;

const getData = () => {
  console.log("fetching dta", count++);
};

function doSomeMagic(fn, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

betterFunction = doSomeMagic(getData, 3000);

// function betterFunction() {
//   console.log("fetching dta");
// }
