function HashTable() {
  let table = [];

  let loseloseHashCode = function (key) { //키를 구성하는 각 문자의 아스키 값을 합하는 함수
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    let position = loseloseHashCode(key);
    console.log(position + '-' + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
  };

  this.print = function () {
    for (let i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(`${i} : ${table[i]}`);
      }
    }
  };
}