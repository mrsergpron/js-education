"use strict";

//Базовые операции

// + - * /
// % остаток от деления
// ** степень
// = присвоить

let str = "HI";
let str2 = "SERG";
let a = 5;
let b = 3;

// + - * /
console.log(str + str2); //HISERG
console.log(str + " " + str2); //HI SERG
console.log(str - str2); //NaN
console.log(str * str2); //NaN
console.log(str / str2); //NaN

console.log(a + b); //8
console.log(a - b); //2
console.log(a * b); //15
console.log(a / b); //1.6666666667

console.log(str + b); //HI3
console.log(str + "5"); //HI5

console.log(true + 1); //2
console.log(false + 1); //1
console.log(true + str); //trueHI
console.log(false + str); //falseHI

// % остаток от деления
console.log(4 % 2); //0
console.log(4 % 3); //1

// ** степень
console.log(2 ** 2); //4

// i++ префиксный инкремент
let a = 5;
a++; //5
// ++i постфиксный инкремент
let a = 5;
++a; //6
// i-- префиксный декремент
let a = 5;
a--; //5
// --i постфиксный декремент
let a = 5;
--a; //4

//операторы сравнения
// ><
// >= <=
// = присвоить
// ==  равно по значению
// === равно по типу и значению
// != не равно
// ! нет
// || или
// && и

true || true; // true
true || false; // true
false || true; //true
false || false; //false

true && true; //true
true && false; //false
false && true; //false
false && false; //false
