function CircularQueue(size) {

  let items = [];
  let front = 0, rear = 0;

  this.isEmpty = function () {
    return rear = front;
  }

  this.isFull = function () {
    return (rear + 1) % size == front;
  }

  this.enqueue = function (element) {
    if (this.isFull()) console.log("Memory is full!");
    else {
      items[rear = (rear + 1) % size] = element;
    }
  }
  this.dequeue = function () {
    if (this.isEmpty()) console.log("Queue is empty!");
    else {
      front = (front + 1) % size;
    }

  }
  this.print = function () {
    for (let i = front; i < rear + 1; i++) {
      items = items[front].element + ' ';
    }
    console.log(items);
  };
}