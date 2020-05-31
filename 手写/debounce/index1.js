function handleChange(e) {
  //   setTimeout(function() {
  console.log("getting data");
  //   }, 3000);
}

function debounce(fn, delay) {
  console.log("this", this);
  let context = this;
  let args = arguments;
  let timer = null;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("this", this);
      fn.apply(context, args);
    }, delay);
  };
}

betterFunction = debounce(handleChange, 3000);
