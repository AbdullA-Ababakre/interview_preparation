//  一个新对象，带着指定的原型对象和属性。 MDN解释

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

function create(object) {
  function F() {}
  F.prototype = object;
  return new F();
}

let me = create(person);
console.log(me);
