let obj = {
  name: "Abdulla",
};

function getName() {
  console.log(this.name);
}

let res = getName.bind(obj);
res();
