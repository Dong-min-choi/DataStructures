function Set() {

  let items = {};

  this.has = function (value) {
    return value in items;
  }

  this.add = function (value) {
    if ((!this.has(value))) {

      items[value] = value; //키와 값을 동일하게 저장하면 나중에 값을 찾기가 편함

      return true;
    }

    return false;
  }

  this.remove = function (value) {
    if (this.has(value)) {

      delete items[value];

      return true;
    }
  }

  this.clear = function () {
    items = {};
  }

  this.size = function () {
    return Object.keys(items).length;
  }

  this.values = function () {
    return Object.keys(items);
  }

  this.union = function (otherSet) {
    let unionSet = new Set(); //unionSet 합집합 생성

    let values = this.values(); //첫 번째 집합의 모든 원소를 추출해서 unionSet에 추가

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values(); //두 번째 집합에서도 위와 똑같이 실행
    for (let i = 0; i < values.length; i++) {

      unionSet.add(values[i]);

    }

    return unionSet;
  }

  this.intersection = function (otherSet) {
    let intersection = new Set(); //교집합 생성

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) { //두 집합에 모두 존재하는 원소면 
        intersection.add(values[i]); //교집합에 원소 추가
      }
    }
  }
}

let set = new Set();

set.add(1);
set.add(2);

console.log(set.values()); //["1","2"]

let setA = new Set();
let setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log(unionAB.values());