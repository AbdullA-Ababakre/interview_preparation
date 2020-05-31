class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  addNodeEnd(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let node = new Node(data);
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getLength() {
    console.log("this.length ", this.length);
  }

  getLastNode() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  //   reverse the linked list the most asked questions
  //   https://www.youtube.com/watch?v=O0By4Zq0OFc
  reverse() {
    let preNode = null;
    let current = this.head;
    let nextNode = null;
    while (current != null) {
      nextNode = current.next; //save next
      current.next = preNode; //reverse
      // advance preNode && current
      preNode = current;
      current = nextNode;
    }
    this.head = preNode;
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
list.addNodeEnd(100);
list.addNodeEnd(200);
list.addNodeEnd(300);
list.printList(); // 100 200 300

list.reverse();
list.printList();
