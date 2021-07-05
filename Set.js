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
}

let set = new Set();

set.add(1);
set.add(2);

console.log(set.values()); //["1","2"]

