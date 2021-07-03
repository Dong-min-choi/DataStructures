function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  let length = 0;
  let head = null, tail = null;
  //원소 추가
  this.append = function (element) {
    let node = new Node(element), current;
    if (head === null) { //리스트가 비어있다면
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    length++; //리스트의 사이즈 업데이트
  }
  //임의의 위치에 원소 삽입
  this.insert = function (position, element) {
    //범위 외의 값인지 체크
    if (position >= 0 && position <= length) {
      let node = new Node(element), current = head, previous, index = 0;
      if (position === 0) { //첫 번째 위치에 원소 추가
        if (!head) { //리스트가 비어있으면 head와 tail 모두 새 노드를 가리키게 함
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) { //맨 끝에 새로운 원소 추가
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else { //리스트 중간에 새 원소 추가
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  }
  //위치를 기반으로 원소 삭제
  this.removeAt = function (position) {
    //범위 외의 값인지 체크
    if (position > -1 && position < length) {
      let current = head, previous, index = 0;
      //첫 번째 원소 삭제
      if (position === 0) {
        head = current.next;
        //원소가 하나뿐이라면 tail 업데이트
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) { //마지막 원소 삭제
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //이전 노들 현재의 다음 노드와 연결
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  }
  this.indexOf = function (element) {
    let current = head, index = -1;
    if (element == current.element) { //첫 번째 원소 체크
      return 0; //첫 번째 원소의 인덱스는 0
    }
    index++;
    //중간 원소 체크
    while (current.next) {
      if (element === current.element) {
        return index;
      }
      current = current.next;
      index++;
    }
    //마지막 원소 체크
    if (element == current.element) {
      return index;
    }
    return -1; //원소를 찾지 못하면
  }

  this.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }
}