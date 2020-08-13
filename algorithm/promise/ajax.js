let url = "https://itunes.apple.com/search?term=jack+johnson&limit=5";

function request() {
  let xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr.responseText);
      } else {
        console.log(xhr.status);
      }
    };

    xhr.open("get", url);
    xhr.send(null);
  });
}

request().then((res) => {
  console.log(res);
});
// console.log(data);
