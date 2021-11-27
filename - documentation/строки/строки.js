"use strict";

//Строки

//подсвечено черным

let str = "Hello World";
console.log(str + '"2022"');

//Методы строк

//Кол-во символов в строке
console.log(str.length); // 11

//перевести в нижний регистр
console.log(str.toLocaleLowerCase()); // hello world

//перевести в верхний регистр
console.log(str.toLocaleUpperCase()); // HELLO WORLD

//узнать позицию в строке
console.log(str.charAt(0)); // H

//поиск по строке
console.log(str.indexOf("W")); // 6

// -1 не найдено
console.log(str.indexOf("WWW")); // 6

//работа с подстроками
console.log(str.substr(1)); // ello World

console.log(str.substr(1, 2)); // el

console.log(str.substring(1)); // ello World

console.log(str.substring(1, 2)); // e

//перевести строку в число
str = "42";

console.log(typeof Number(str)); //number
console.log(typeof +str); //number
