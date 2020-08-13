let str="abab";

function testRepeat(){
   let reg=/^(\w+)\1+$/gi;
   return reg.test(str);
}

let res=testRepeat();
console.log(res);
