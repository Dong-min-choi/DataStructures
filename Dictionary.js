function Dictionary() {
  let items = {};

  this.has = function (key) {
    return key in items; //키에 해당하는 원소가 딕셔너리에 존재하면 true, 존재하지 않으면 false 반환
  };

  this.set = function (key, value) {
    items[key] = value;
  };

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function (key) { //key에 해당하는 값이 있으면 원소 반환
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function () {
    let values = [];
    for (let k in items) {
      values.push(items[k]);
    }
    return values;
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.getItems = function () {
    return items;
  };
}