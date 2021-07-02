function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null;
  //리스트에 원소 추가
  this.append = function (element) {
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
  this.removeAt = function (position) { //삭제할 원소의 위치를 인자로 받음
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
  //임의의 위치에 원소 삽입
  this.insert = function (position, element) {
    //범위 외의 값인지 체크
    if (position > 0 && position <= length) {
      let node = new Node(element), current = head, previous, index = 0;
      if (position == 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else { //범위를 벗어났다면 false 반환
      return false;
    }
  }
  //출력
  this.print = function () {
    let current = head, string = '';
    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  }
  //인덱스 반환
  this.indexOf = function (element) {
    let current = head, index = -1;
    while (current) {
      if (element === current.element) { //찾는 원소를 발견하면 인덱스 반환
        return index;
      }
      index++;
      current = current.next;
    }
    return -1; //발견된 원소가 없으면 -1 반환
  }
  //원소 삭제 removeAt은 원소의 위치를 인자로 받는 반면에 인자로 삭제할 원소를 받음
  this.remove = function (element) {
    let index = this.indexOf(element); //원소의 인덱스를 찾아서
    return this.removeAt(index); //removeAt에 인자로 전달
  }
  this.isEmpty = function () { //원소가 하나라도 있으면 true, 아니면 false 반환
    return length === 0;
  }
  this.size = function () {
    return length;
  }
  this.getHead = function () {
    return head;
  }
}