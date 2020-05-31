function traversal(nodes) {
  let len = nodes.length;
  for (let i = 0; i < len; i++) {
    let child = nodes[i];
    console.log(child);
    if (child.children) {
      traversal(child.children);
    }
  }
}

let nodeChildren = document.getElementById("list").children;

traversal(nodeChildren);
