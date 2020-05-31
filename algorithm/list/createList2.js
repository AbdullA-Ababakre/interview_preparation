class Node {
  constructor(data, next = null) {
    this.data = data;
    next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = node;
    }
  }

  printList() {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode.data);
      curNode = curNode.next;
    }
  }
}

let list = new List();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.printList();
