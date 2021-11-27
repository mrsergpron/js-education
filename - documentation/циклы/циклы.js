"use strict";

//Цыклы

// 0 1 2 3 4 5 6
for (let i = 0; i < 7; i++) {
  console.log(i);
}

//0 1 2 3 4 5 6
for (let i = 0; i < 7; i++) {
  if (i == 4) {
    continue;
  }
  console.log(i);
}

//0 1 2 3
for (let i = 0; i < 7; i++) {
  if (i == 4) {
    break;
  }
  console.log(i);
}

//вывести четные числа массива
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  if (i % 2) {
    continue;
  }
  console.log(arr[i]);
}

//вывести нечетные числа массива
for (let i = 0; i < arr.length; i++) {
  if (i % 2) {
    console.log(arr[i]);
  }
}
