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
      for (let j = 0; j < length - 1 - i; j++) {
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

  this.selectionSort = function () {
    let length = array.length;
    let indexMin;

    for (let i = 0; i < length - 1; i++) {
      indexMin = i;

      for (let j = i; j < length; j++) {

        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
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