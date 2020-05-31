let str = "Javascriptisagoodlanguage";

function freq() {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let curChar = str[i];
    if (obj[curChar]) {
      obj[curChar]++;
    } else {
      obj[curChar] = 1;
    }
  }

  let newArr = [];
  for (let key in obj) {
    let newObj = {};
    newObj.key = key;
    newObj.val = obj[key];
    newArr.push(newObj);
  }
  newArr = newArr.sort((a, b) => {
    return a.val - b.val;
  });
  return newArr;
}

// Object.prototype.sort=function(obj){

// }

let res = freq(str);
console.log(res);
