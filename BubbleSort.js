let items = [3,4,5,2,1,4];

function BubbleSort() {
  
  let temp;

  for (let i = 0; i < items.length - 1; i++) {

    for (let j = 0; j < items.length - 1 - i; j++) {

      if (items[j] > items[j + 1]) {

        temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;

      }
    }
  }
}