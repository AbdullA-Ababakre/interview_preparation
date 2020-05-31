let url = "http://www.meituan.com/?user=zhaoshuai05&id=123&cityID=789";

function parseParam(url) {
  let paramStr = url.slice(url.indexOf("?") + 1);
  paramArr = paramStr.split("&");
  let reg = /=/;
  for (let i = 0; i < paramArr.length; i++) {
    paramArr[i] = paramArr[i].replace(reg, ":");
  }
  return paramArr;
}
    
let res = parseParam(url);
console.log(res);
