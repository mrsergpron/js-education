"use strict";

//Функции

car(2000); // 21
//именная задекларированная видна везде
function car(year) {
  console.log(2021 - year);
}

//не сработает вызвана раньше объявления функции
//car2("bmw");

//анонимная функция
let car2 = function (brand) {
  console.log(brand);
};

car2("bmw");
