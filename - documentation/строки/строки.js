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

// содержит ли строка значение
//true / false
let str8 = "123Ab";
console.log(str8.includes(2)); //true
console.log(str8.includes("2")); //true
console.log(str8.includes("a")); //false

//проверить начинается ли строка с символа
let str13 = "Hello World";
console.log(str13.startsWith("Hello")); //true
console.log(str13.startsWith("Hel")); //true
console.log(str13.startsWith("hel")); //false

//проверить заканчивается ли строка с символа
console.log(str13.endsWith("World")); //true
console.log(str13.endsWith("world")); //false
console.log(str13.endsWith("d")); //true

//работа с подстроками substr / substring / slice

console.log("substr");

//substr от спозиции i взять i количество
// 0 - первый элемент
let str20 = "Hi Serg";
console.log(str20.substr(1)); // i Serg
console.log(str20.substr(0, 2)); // Hi
console.log(str20.substr(3, 3)); // Ser

console.log("substring");

//substring между 3 и 5 (5 не включая)
console.log(str20.substring(1)); // i Serg
console.log(str20.substring(0, 2)); // Hi
console.log(str20.substring(3, 5)); // Se

console.log("slice ");

//slice между 3 и 5 (5 не включая)
console.log(str20.slice(1)); // i Serg
console.log(str20.slice(0, 2)); // Hi
console.log(str20.slice(3, 5)); // Se
console.log(str20.slice(1, -3)); // i S
console.log(str20.slice(-4, -2)); // Se

//перевести строку в число
str = "42";

console.log(typeof Number(str)); //number
console.log(typeof +str); //number

let str5 = "1,2,3,4,5";
let num = parseInt(str5);
console.log(typeof num); //number

//вывести элементы строки циклом

let str6 = "ABCD";
for (let i = 0; i < str6.length; i++) {
  console.log(str6[i]);
}
for (let i of str6) {
  console.log(i);
}

//увеличить строку в 3 раза
let str7 = "123";
console.log(str7.repeat(3)); //123123123

//удалить пробелы в строке
let str9 = " 123 ";
console.log(str9.length); //5

let str10 = str9.trim();
console.log(str10.length); //3

let str11 = str9.trimLeft();
console.log(str11.length); //4

let str12 = str9.trimRight();
console.log(str12.length); //4

//преобразовать строку в массив split('')
let str30 = "12345";
let arr = str30.split("");
console.log(arr); //['1', '2', '3', '4', '5']

//преобразовать строку в массив Array.from()
let array = Array.from(str30);
console.log(array); //['1', '2', '3', '4', '5']

//создать из массива строку join(',')
let arr2 = [1, 2, 3, "A"];

let str40 = arr2.join();
console.log(str40); // 1,2,3,A

let str41 = arr2.join("/");
console.log(str41); // 1/2/3/A

//преобразовать объект в строку JSON.stringify()
const obj = {
  name: "Serg",
  age: 43,
};
console.log(obj); //{name: 'Serg', age: 43}

let str50 = JSON.stringify(obj);
console.log(str50); //{"name":"Serg","age":43}

//преобразовать строку в объект JSON.parse()

const obj2 = JSON.parse(str50);
console.log(obj2); // {name: 'Serg', age: 43}
