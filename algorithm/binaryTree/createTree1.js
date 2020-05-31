class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

let node1 = new BinaryTree();
let node2 = new BinaryTree();
let arr1 = [1, 3, 2, 5];
let arr2 = [2, 1, 3, 4, 7];
for (let i = 0; i < arr1.length; i++) {
  node1.insert(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  node2.insert(arr2[i]);
}
