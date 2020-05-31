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

  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(null);
      });
    }
  }

  off(eventName) {
    while (this.events[eventName].length > 0) {
      this.events[eventName].pop();
    }
  }
}

let ee = new EventEmitter();
ee.on("click", function() {
  console.log("hello click");
});

ee.trigger("click");
ee.off("click");
ee.trigger("click");
