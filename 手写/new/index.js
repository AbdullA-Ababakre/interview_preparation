function Foo() {
  this.name = "Abdulla";
  return {};
}

let foo = new Foo();
console.log(foo); //Foo {name: "Abdulla"}
