function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null;
  //리스트에 원소 추가
  this.append = function () {
    let node = new Node(element);
    let current;
    //원소를 끝에 추가
    if (head === null) { //리스트가 비어있다면
      head = node;
    } else {
      current = head;
      while (current.next) { //마지막 노드까지 순회
        current = current.next;
      }
      current.next = node; //원소를 마지막 노드에 연결  
    }
    length++; //리스트 사이즈 업데이트
  }
  //원소 삭제
  this.remove = function (position) { //삭제할 원소의 위치를 인자로 받음
    if (position > -1 && position < length) {
      let current = head, previous;
      index = 0;
      //첫 번째 원소 삭제
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //현재의 다음 노드와 이전 노드를 서로 연결
        previous.next = current.next;
      }
      length--;
    } else return null;
  }

}