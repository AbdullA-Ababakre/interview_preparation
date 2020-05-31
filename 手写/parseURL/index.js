let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";

function parseURL(url) {
  let index = url.indexOf("?");
  let str = url.slice(index + 1);
  let strArr = str.split("&");
  console.log("strArr", strArr);
  let paramObj = {};
  //   console.log("strArr", strArr);
  strArr.forEach(function (param) {
    if (/=/g.test(param)) {
      let [key, value] = param.split("=");
      if (paramObj[key]) {
        paramObj[key] = value;
      } else {
        paramobj[key] = [].concat(paramObj[key], value);
      }
    } else {
      paramObj[param] = true;
    }
  });
}

let res = parseURL(url);
console.log(res);
