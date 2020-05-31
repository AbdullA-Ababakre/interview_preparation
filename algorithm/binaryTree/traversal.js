function traversal(nodes) {
  let len = nodes.length;
  for (let i = 0; i < len; i++) {
    let node = nodes[i];
    console.log(node.getAttribute("data-v"));
    if (node.children) {
      traversal(node.children);
    }
  }
}

const nodes = document.getElementById("root").children;

traversal(nodes);
console.dir(nodes);
