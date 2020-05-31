let counter = 0;
function getData() {
  console.log("Fetching data", counter++);
}

const doSomeMagic = function (fn, delay) {
  let context = this; //window
  args = arguments;
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// only implement the funcition when the two onkeyUp's
// interval is 300
const betterFunction = doSomeMagic(getData, 300);
