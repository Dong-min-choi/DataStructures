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
  };

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
  };

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
  };

  let postOrderTraverseNode = function (node, callback) {

    if (node !== null) {

      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  this.min = function () {
    return minNode(root);
  };

  let minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }
    return null;
  };

  let findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left;
    }

    return node;
  };

  this.max = function () {
    return maxNode(root);
  };

  let maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }
    return null;
  };

  //특정 노드가 있는지 확인
  this.search = function (key) {
    return searchNode(root, key);
  };

  let searchNode = function (node, key) {

    if (node === null) {
      return false;

    }
    if (key < node.key) {
      return searchNode(node.left, key);

    } else if (key > node.key) {
      return searchNode(node.right, key);

    } else {
      return true;

    }
  };

  this.remove = function (key) {
    root = removeNode(root, key);
  };


  let removeNode = function (node, key) {

    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;

    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;

    } else { //key가 node.key와 같다.

      //case 1 리프 노드
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //case 2 자식이 하나뿐인 노드
      if (node.left === null) { //오른쪽 자식만 존재
        node = node.right;
        return node;
      } else if (node.right === null) { //왼쪽 자식만 존재
        node = node.left;
        return node;
      }

      //case 3 자식이 둘인 노드
      let aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }

  };

}


//노드 출력을 위한 헬퍼 함수
let callback = function (values) {
  console.log(values);
}