class Node {
  constructor(value, left = null, right = null) {
    this.data = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    const node = this.root;
    if (!node) {
      this.root = new Node(value);
      this.size++;
      return;
    } else {
      const searchTree = function(node) {
        if (value < node.data) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            searchTree(node.left);
          }
        } else if (value > node.data) {
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            searchTree(node.right);
          }
        } else {
          return;
        }
      };
      searchTree(node);
    }
    this.size++;
  }

  printPaths() {
    let path = [];
    this.printPathRecur(this.root, path, 0);
  }

  printPathRecur(node, path, pathLen) {
    if (node === null) {
      return;
    }

    // append this node the path array;
    path[pathLen] = node.data;
    pathLen++;

    if (node.left == null && node.right == null) {
      this.printArray(path, pathLen);
    } else {
      // otherwise try both subtrees;
      this.printPathRecur(node.left, path, pathLen);
      this.printPathRecur(node.right, path, pathLen);
    }
  }

  printArray(arr, len) {
    for (let i = 0; i < len; i++) {
      console.log("arr", arr[i]);
    }
    console.log("one path done");
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }

        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      this.printLevelOrder(result);
    } else {
      return;
    }
  }

  printLevelOrder(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      console.log(arr[i]);
    }
    console.log("one row is done");
  }
}

let bst = new BST();
// bst.add(10);
// bst.add(5);
// bst.add(15);
// bst.add(2);
// bst.add(7);
// bst.add(30);
// bst.add(1);

bst.add(100);
bst.add(1000);
bst.add(150);
bst.add(50);
bst.add(70);

bst.printPaths();
// bst.levelOrder();
