"use strict";

//Числа

//подсвечены синим
// 2e3 = 3000
// 2 / 's' = NaN не число (тип данных число)
// 2 / 0 = infinity

//кол-во знаков после запятой
let number = (8 / 3).toFixed(2);
console.log(number); //2.67 строка

console.log(typeof number); //строка
console.log(typeof +number); //число

//перевести число в строку
let num = 42;
console.log(typeof num.toString()); //string
console.log(typeof toString(num)); //string

//получить тип число целое без запятой
console.log(parseInt(number)); // 2 число

//получить тип число с запятой
console.log(parseFloat(number)); // 2.67 число

//проверить число или нет
console.log(isNaN(42)); // false
let str = "s";
console.log(isNaN(str)); // true

//проверить конечно ли число или нет
console.log(isFinite(1 / 0)); // false
console.log(isFinite(8 / 2)); // true
