//  eventing pattern
// on for set up an event  two arguments(event name,callback that registered to that event)
// trigger for trigging an event    trigger that event

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  trigger(eventName, ...rest) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(null, rest);
      });
    }
  }

  off(eventName) {
    if (this.events[eventName]) {
      while (this.events[eventName].length > 0) {
        this.events[eventName].pop();
      }
    }
  }
}

let ee = new EventEmitter();
ee.on("change", () => {
  console.log("hello ,chage!");
});

ee.on("change", () => {
  console.log("hello ,chage!");
});

ee.on("click", () => {
  console.log("hello,click");
});

ee.off("click");

ee.trigger("change");
ee.trigger("click");

console.log(ee.events);
