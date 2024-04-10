function Queue() {
  let items = [];
  //큐에 원소 추가
  this.enqueue = function (element) {
    items.push(element);
  };
  //큐에서 가장 처음에 추가된 원소를 삭제하고 반환
  this.dequeue = function () {
    return items.shift();
  };
  //큐의 맨 앞의 원소를 확인
  this.front = function () {
    return items[0];
  };
  //큐가 비어있는지 확인
  this.isEmpty = function () {
    return items.length == 0;
  };
  //큐의 길이 확인
  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  }
}

//인스턴스 생성
let queue = new Queue();

//원소 추가
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

//큐 확인, 원소 삭제
console.log(queue.print());//A,B,C
queue.dequeue();//A
console.log(queue.print());//B,C
queue.dequeue();//B
console.log(queue.print());//C