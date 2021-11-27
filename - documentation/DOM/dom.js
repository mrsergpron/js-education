"use strict";

//DOM (document object model) node - узел

//ДОСТУП К УЗЛАМ

console.log(document); // Html код

const div = document.getElementById("playground");
console.log(div); //вернет html код

const classElement = document.getElementsByClassName("text");
console.log(classElement); // вернет HTMLCollection в виде массива [p.text, p.text]

const tagElement = document.getElementsByTagName("p");
console.log(tagElement); // вернет HTMLCollection в виде массива [p.text, p.text]

//Использовать в работе
const div2 = document.querySelector("#playground");
console.log(div2); // вернет html код

const div3 = document.querySelectorAll(".text");
console.log(div3); //вернет NodeList в виде массива [p.text, p.text]

const h1 = document.querySelector("h1");
console.log(h1); // вернет <h1>DOM</h1>

const p = document.querySelectorAll("p");
console.log(p[1]); // вернет <p class="text">Абзац 2</p>

const nodeElem = document.querySelector("#playground > ul");
console.log(nodeElem); // вернет html код <ul> <li>1</li> ... <li>3</li> </ul>

const nodeElem2 = document.querySelectorAll("ul");
console.log(nodeElem2[1]); // вернет html код <ul> <li>4</li> ... <li>6</li> </ul>

//ДОСТУП К СОДЕРЖИМОМУ ЭЛЕМЕНТОВ

const h = document.querySelector("h1");
//изменить html код внутри элемента
h.innerHTML = '<div style="color: red; font-size:30px;">DOM</div>';

//вывести текст внутри элемента
const span = document.querySelector("span");
console.log(span.textContent);

//изменить текст внутри элемента
span.textContent = "span";

//работа с input
const input = document.querySelector("input");
console.log(input.value);

//изменить знечение в input
input.value = "new input";
