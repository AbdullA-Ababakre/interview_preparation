let obj = {
  name: "Abdulla",
  age: 23,
};

function getName() {
  console.log(this.name);
}

getName.call(obj);
