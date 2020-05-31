let url =
  "https://itunes.apple.com/search?term=jack+johnson&limit=5&callback=getData";

// function getData(res) {
//   console.log(res);
// }

window.onload = function() {
  let scriptElement = document.createElement("script");
  scriptElement.setAttribute("src", url);
  let headElement = document.getElementsByTagName("head")[0];
  headElement.appendChild(scriptElement);
  window.getData = function(res) {
    console.log(res);
  };
};
