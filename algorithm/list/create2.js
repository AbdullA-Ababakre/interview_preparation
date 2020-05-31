class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data, null);
    if (this.head === null) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
  }

  reverse() {
    debugger;
    let cur = this.head;
    let pre = null;
    let nex = null;
    while (cur) {
      nex = cur.next;
      //   pre = cur.next;   特别容易出错，我就错了
      cur.next = pre;
      pre = cur;
      cur = nex;
    }
    this.head = pre;
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(cur.data);
      cur = cur.next;
    }
  }
}

let list = new List();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.add(60);
list.reverse();
list.print();
