"use strict";

//Массив

//создать массив
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//вывести элемент массива
console.log(arr[0]); //1

//добавить в конец массива
arr.push(6);

//добавить в начало массива
arr.unshift(0);
console.log(arr);

//удалить из конца массива
//вернет удаленный элемент
arr.pop();

//удалить из начала массива
//вернет удаленный элемент
arr.shift();

//длинна массива
console.log(arr.length); //5

//поиск по массиву
console.log(arr.indexOf(4)); //3
// -1 не найдено
console.log(arr.indexOf("A")); // -1

//удалить элемент из массива
//splice(0, 2 с нулевого элемента удалить два элемента
const arr10 = [0, 1, 2, 3, 4, 5];
arr10.splice(0, 2);

console.log(arr10); //2 3 4 5

//преобразовать массив в строку join (' ') ' ' разделитель между элементами
const arr11 = ["Audi", "BMW", "Sckoda", "Opel"];
console.log(arr11);
console.log(typeof arr11); //object

const arr12 = arr11.join(" "); // Audi BMW Sckoda Opel
console.log(typeof arr12); // string
