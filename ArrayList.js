function ArrayList() {

  let array = [];

  this.insert = function (item) {

    array.push(item);
  };

  this.toString = function () {

    return array.join();
  };

  this.bubbleSort = function () {
    let length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  let swap = function (a, b) { 
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  };
}


var a = new ArrayList();

a.insert(6);
a.insert(2);
a.insert(1);
a.insert(4);
a.insert(5);
a.insert(9);

a.toString();

a.bubbleSort();

a.toString();