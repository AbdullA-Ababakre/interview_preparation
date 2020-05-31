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
      const searchTree = function (node) {
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

  // 先序遍历可用于打印树的结构
  // 先序遍历先访问根节点，然后访问左节点，最后访问右节点。
  preTraversal() {
    this.pre(this.root);
  }

  pre(node) {
    if (node) {
      console.log(node.data);
      this.pre(node.left);
      this.pre(node.right);
    }
  }

  // 中序遍历可用于排序
  // 对于 BST 来说，中序遍历可以实现一次遍历就
  // 得到有序的值
  // 中序遍历表示先访问左节点，然后访问根节点，最后访问右节点。
  midTraversal() {
    this.mid(this.root);
  }

  mid(node) {
    if (node) {
      this.mid(node.left);
      console.log(node.data);
      this.mid(node.right);
    }
  }

  // 后序遍历可用于先操作子节点
  // 再操作父节点的场景
  // 后序遍历表示先访问左节点，然后访问右节点，最后访问根节点。
  backTraversal() {
    this.back(this.root);
  }
  back(node) {
    if (node) {
      this.back(node.left);
      this.back(node.right);
      console.log(node.data);
    }
  }

  findMin() {
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    console.log("min node", node.data);
  }

  findMax() {
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    console.log("min node", node.data);
  }
}

let bst = new BST();
bst.add(10);
bst.add(5);
bst.add(2);
bst.add(7);
bst.add(15);
bst.add(30);
bst.add(1);

bst.findMin();
bst.findMax();

console.log(bst);
