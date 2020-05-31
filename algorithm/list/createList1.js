class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size++;
  }

  add(data) {
    if (this.head === null) {
      this.insertFirst(data);
    } else {
    }
  }

  insertFirst(data) {
    this.head = new Node(data);
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new List();
list.add(100);
list.printList();
