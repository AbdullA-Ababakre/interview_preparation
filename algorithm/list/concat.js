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

  getAtIndex(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current.data;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// function concat(l1, l2) {
//   let dummyHead = new Node(null, null);
//   let head1 = l1.head;
//   let head2 = l2.head;
//   while (head1 && head2) {
//     if (head1.data <= head2.data) {
//       dummyHead.next = head1;
//       head1 = head1.next;
//       dummyHead = dummyHead.next;
//     } else {
//       dummyHead.next = head2;
//       head2 = head2.next;
//       dummyHead = dummyHead.next;
//     }
//   }
//   console.log(dummyHead);
// }

var mergeTwoLists = function(l1, l2) {
  // debugger;
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let dummyHead = new Node(null, null);
  let p = dummyHead;
  let p1 = l1.head;
  let p2 = l2.head;
  while (p1 && p2) {
    if (p1.data > p2.data) {
      p.next = p2;
      p = p.next;
      p2 = p2.next;
    } else {
      p.next = p1;
      p = p.next;
      p1 = p1.next;
    }
  }
  // 循环完成后务必检查剩下的部分
  if (p1) p.next = p1;
  else p.next = p2;
  return dummyHead.next;
};

let list1 = new List();
let list2 = new List();

let newList = new List();
list1.addNodeEnd(100);
list1.addNodeEnd(200);
list1.addNodeEnd(300);
list2.addNodeEnd(150);
list2.addNodeEnd(180);
list2.addNodeEnd(190);
list2.addNodeEnd(290);
// list1.printList();
// list2.printList();
// concat(list1, list2);
let head = mergeTwoLists(list1, list2);
console.log(head);
