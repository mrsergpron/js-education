"use strict";

//Math объект

console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

//случайные числа от 0-0,99
console.log(Math.random());

//округление в большую / меньшую сторону
let num = 4.5;
console.log(Math.floor(num)); //4
console.log(Math.ceil(num)); //5

//округление в большую / меньшую сторону
let num1 = 4.5;
console.log(Math.round(num1)); //5
console.log(Math.trunc(num1)); //4

//степень
let num2 = 4;
console.log(Math.pow(num2, 2)); //16

//корень
let num3 = 4;
console.log(Math.sqrt(num3)); //2

//максимальное / минимальное значение из диапазона

console.log(Math.min(1, 10, 5)); //1
console.log(Math.max(1, 10, 5)); //10
