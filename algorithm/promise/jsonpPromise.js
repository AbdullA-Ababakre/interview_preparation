// function createScript() {
//   return new Promise((resolve, reject) => {
//     let url =
//       "https://itunes.apple.com/search?term=jack+johnson&limit=5&callback=getData";

//     let scriptElement = document.createElement("script");
//     scriptElement.setAttribute("src", url);
//     let headElement = document.getElementsByTagName("head")[0];
//     headElement.appendChild(scriptElement);
//   });
// }

// createScript().then(getData);

function Jsonp(url) {
  var url =
    url.indexOf("?") > -1
      ? url + "&callback=callback"
      : url + "?callback=callback";

  return new Promise(function(resolve, reject) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);

    window.callback = function(param) {
      resolve(param);
    };
    console.log("callback", window.callback);
  });
}

//后台返回数据示例：callback({'name':'liuhao'})
let url = "https://itunes.apple.com/search?term=jack+johnson&limit=5";
Jsonp(url).then(function(res) {
  console.log(res); //{'name':'liuhao'}
});
