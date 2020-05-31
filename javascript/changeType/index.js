// let a = {
//   value: 0,
//   valueOf: function() {
//     this.value++;
//     return this.value;
//   }
// };

// console.log(a == 1 && a == 2);

let obj = {
  a: function() {
    console.log(this);
  }
};
let func = obj.a;
func();


