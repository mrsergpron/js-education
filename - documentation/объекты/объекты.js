"use strict";

//Объекты

const obj = {
  name: "Serg",
  age: 42,
  car: ["Audi", "BMW"],
  color: { type: "white" },
  year: 2021,

  //метод

  calculateAge: function (year) {
    console.log(2021 - year);
  },

  myAge: function () {
    console.log(2021 - this.year);
  },
};

console.log(obj.name);

obj.age = 43;
console.log(obj.age);

console.log(obj.car[0]);

console.log(obj.color.type);

console.log(obj["age"]);

obj.calculateAge(2021);

obj.myAge();
