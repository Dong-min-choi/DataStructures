function BinarySearchTree() {

  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insert = function (key) {

    let newNode = new Node(key); //새 노드 생성

    if (root === null) {

      root = newNode;

    } else {

      insertNode(root, newNode);

    }
  };

  let insertNode = function (node, newNode) {

    if (newNode.key < node.key) { //새 노드가 기존 노드보다 작으면
      if (node.left === null) {
        node.left = newNode; //왼쪽 자식으로
      } else {
        insertNode(node.left, newNode);
      }
    } else { //새 노드가 기존 노드보다 크면
      if (node.right === null) {
        node.right = newNode; //오른쪽 자식으로
      } else {
        insertNode(npde.right, newNode);
      }
    }
  };
}