"use strict";

//ПЕРЕМЕННЫЕ

//var устарела не использовать
var message = "Hi";
//является свойством объекта window
console.log(window.message);

//let можно изменять
//const не изменяется с большой буквы имя
const COLOR = "white";

//имена переменных
let color;
let Color;
let _color;
let color_;
let color1;
let colorCar;
let $color;
let $;
let _;

//если переменная не используется ее переопределяют
var message = color;
//или обнуляют
color = null;
//это освобождает память
