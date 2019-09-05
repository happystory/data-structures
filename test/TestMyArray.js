const myArray = require('../src/myArray');

const arr = new myArray(20);

for (let i = 0; i < 10; i++) {
  arr.addLast(i);
}
console.log(arr.toString());

arr.add(1, 100);
console.log(arr.toString());

arr.addFirst(-1);
console.log(arr.toString());

arr.remove(2);
console.log(arr.toString());

arr.removeElement(4);
console.log(arr.toString());

arr.removeFirst();
console.log(arr.toString());
