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
        insertNode(node.right, newNode);
      }
    }
  };

  //중위 순회
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  }

  let inOrderTraverseNode = function (node, callback) {

    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  //전위 순회
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  }

  let preOrderTraverseNode = function (node, callback) {

    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  //후위 순회
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  }

  let postOrderTraverseNode = function (node, callback) {

    if (node !== null) {

      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

}


//노드 출력을 위한 헬퍼 함수
let callback = function (values) {
  console.log(values);
}