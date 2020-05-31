const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log("regular function", this);
    console.log(`Started ${this.brand} ${this.model}`);
  },
  stop: () => {
    console.log("arrow function", this);
    console.log(`Stopped ${this.brand} ${this.model}`);
  },
};

car.stop();
car.start();

// var a = {
//   x: 1,
// };
// var b = a;

// a = a.x = {
//   x: 1,
// };
// console.log(a); // {x:1}
// console.log(b); // {x:{x:1}}
