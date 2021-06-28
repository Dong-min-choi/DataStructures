function Stack() {
  let items = [];

  //스택에 새로운 원소 추가
  this.push = function (element) {
    items.push(element);
  };
  //스택에서 가장 마지막에 추가된 원소 삭제
  this.pop = function () {
    return items.pop();
  };
  //스택에서 가장 마지막으로 추가된 원소를 확인하는 용도
  this.peek = function () {
    return items[items.length - 1];
  };
  //스택이 비어있으면 true, 아니면 false 반환
  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };
  //스택 초기화
  this.clear = function () {
    items = [];
  };
  this.print = function () {
    console.log(items.toString());
  };
}

let stack = new Stack();
console.log(stack.isEmpty()); //true

stack.push(5);
stack.push(3);
console.log(stack.size());//2
console.log(stack.isEmpty()); //false

stack.push(15);

console.log(stack.print());//5,3,15


stack.pop();//15
stack.pop();//3
stack.pop();//5





