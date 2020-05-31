// https://alligator.io/js/promises-es6/

let myPromise = new Promise((resolve, reject) => {
  let data;
  setTimeout(() => {
    data = "some playload";
    if (data) {
      resolve(data);
    } else {
      reject(data);
    }
  }, 2000);
});

myPromise
  .then(data => {
    console.log(data);
    let myOther = "other data";
    return myOther;
  })
  .then(data => {
    console.log(data);
  })
  .catch(() => {
    console.log("there is no data");
  });
