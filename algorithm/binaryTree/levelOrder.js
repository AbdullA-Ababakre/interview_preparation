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

  levelOrder() {
    let res = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        // should not use pop,shift is for removing the first element
        let node = Q.shift();
        res.push(node);
        if (node.left !== null) {
          Q.push(node.left);
        }

        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      this.printArr(res);
    } else {
      return;
    }
  }

  printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].data);
    }
    console.log("one row is done");
  }
}

let bst = new BST();
bst.add(100);
bst.add(1000);
bst.add(150);
bst.add(50);
bst.add(70);
bst.levelOrder();
