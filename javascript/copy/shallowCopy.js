const original = {
  name: "Fiesta",
  car: {
    color: "blue",
  },
};

let copied = JSON.parse(JSON.stringify(original));

original.name = "Abdulla";
console.log(original.name);
console.log(copied.name);

original.car.color = "red";
console.log(original.car.color);
console.log(copied.car.color);

// 坏处
console.log(original.constructor());
console.log(copied.constructor());
