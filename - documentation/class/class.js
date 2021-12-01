//Классы

const p = document.querySelector("p");

//добавить класс
p.classList.add("green");

//удалить класс
p.classList.remove("green");

//проверить класс
p.classList.contains("green");
console.log(p.classList.contains("green")); // false

//узнать имя класса
console.log(p.className); //red

//переключение классов toggle
//добавление или удаление класса

p.addEventListener("click", function (event) {
  event.target.classList.toggle("green");
});
