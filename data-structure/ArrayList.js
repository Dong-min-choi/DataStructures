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

  this.insertionSort = function () {
    let length = array.length;
    let j;
    let temp;

    for (let i = 1; i < length; i++) { //첫 번째 원소는 이미 정렬된 상태라고 보고 두 번째 원소부터 배열 순회
      j = i;
      temp = arra[i];
      while (j > 0 && array[j - 1] > temp) { //j가 0보다 크고 직전 인덱스의 원소가 인덱스i 원소보다 크면
        array[j] = array[j - 1];//직전 인덱스 원소를 i로 옮기고
        j--;//j를 1만큼 감소
      }
      array[j] = temp;
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