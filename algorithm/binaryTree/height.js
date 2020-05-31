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

  //   Depth() {
  //     this.maxDepth(this.root);
  //   }

  //   maxDepth(root) {
  //     if (root === null) {
  //       console.log(0);
  //     }
  //     console.log(
  //       Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1
  //     );
  //   }
}

// https://www.youtube.com/watch?v=YT1994beXn0
let maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let bst = new BST();
bst.add(100);
bst.add(1000);
bst.add(150);
bst.add(50);
bst.add(70);
let res = maxDepth(bst.root);
console.log(res);
