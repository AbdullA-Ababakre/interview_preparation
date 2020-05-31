let str = "Let's take LeetCode contest";

function reverseWord(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");
}

let res = reverseWord(str);
console.log(res);
