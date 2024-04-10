function Set() {

  let items = [];

  this.has = function (value) {
    if (items.indexOf(value) > -1) return true;
    else return false;
  }

  this.add = function (value) {
    if (!this.has(value)) {

      items.push(value);
      return true;
    }

    return false;
  }

  this.remove = function (value) {
    let index = items.indexOf(value);

    if (this.has(value)) {

      if (index === 0) {

        items.shift(); //삭제하려는 원소의 인덱스가 0이라면 shift!
        return true;
      }

      items.splice(index - 1, 1);
      return true;
    }
  }

  this.clear = function () {
    items = [];
  }

  this.size = function () {
    return items.length;
  }

  this.print = function () {
    console.log(items);
  }

}


