let url = "https://itunes.apple.com/search";

function getData() {
  let xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function() {
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

function postData() {
  let xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        resolve(xhr.responseText);
      } else {
        console.log(xhr.status);
      }
    };

    let data = {
      term: "jack+johnson",
      limit: 5
    };

    xhr.open("post", url);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  });
}

postData().then(res => {
  console.log(res);
});
