//Взаимодействие с пользователями

//Alert останавливает дальнейшее выполнение кода

alert("Подтвердите свое действие");
console.log("HI!");

//Confirm
//ok вернет true
//отмена вернет false

const age = confirm("Подтвердите ваш возраст, 18лет");
age ? console.log("вы прошли проверку") : console.log("Вход запрещен");

//Prompt окно ввода с данными
const yourAge = prompt("Вход разрешен с", 18);
yourAge >= 18
  ? console.log("вы прошли проверку")
  : console.log("Вход запрещен");
