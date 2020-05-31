function defineProperty(obj, attr, prop) {
  Object.defineProperty(obj, attr, {
    set: function () {
      obj[attr] = prop;
    },
    get: function () {
      return prop;
    },
  });
}

let man = {};
defineProperty(man, "name", "Abdulla");
man.name = "Abdulla";
console.log(man);
