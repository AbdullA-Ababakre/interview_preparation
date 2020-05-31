// 判断手机号
// 1开始
// 11位
//   /^1[34578]\d{9}$/;
let reg=/^1[0-9]{10}/;
let res=reg.test(17724604801);
console.log(res);

// 判断邮箱
let mail1='2997244584@qq.com';
let mail2='abdullaszu@gmail.com';

let reg1=/\w{1,}@\w{1,}(.com)$/g;
let reg2=/^[A-Za-z0-9]{1,}@([A-Za-z0-9]{1,}\.)com$/g;
// console.log(reg1.test(mail1));
console.log(reg1.test(mail2));