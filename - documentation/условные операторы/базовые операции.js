"use strict";

//условные операторы

let a = 20;
let b = 10;

if (a > b) {
  console.log("a>b");
} else if (a < b) {
  console.log("a<b");
} else console.log("a=b");

//таже запись но тернарным оператором

a > b ? console.log("a>b") : a < b ? console.log("a<b") : console.log("a=b");

//если много условий используем switch
//сравнивает switch ("Serg") с case "Serg"

switch ("Serg") {
  case "Serg":
    console.log("Serg");
    break;
  case "Yuliya":
    console.log("Yuliya");
    break;
  default:
    console.log("неизвестное имя");
}
