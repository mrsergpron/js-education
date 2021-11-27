//События

//DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

const h1 = document.querySelector("h1");

function clickButton() {
  console.log(this); // <button>Click</button>
}

const button = document.querySelector("button");
button.addEventListener("click", clickButton);

//изменим цвет и содержимое тега H1 при наведении не него мышкой

function clickChangeTitle() {
  h1.style.color = "red";
  h1.textContent = "mouseenter";
}

function clickChangeTitle2() {
  h1.style.color = "black";
  h1.style.fontSize = "40px";
  h1.textContent = "mouseleave";
}

h1.addEventListener("mouseenter", clickChangeTitle);
h1.addEventListener("mouseleave", clickChangeTitle2);

//изменим Title на текст из поля input

function changeTitleInput() {
  h1.textContent = input.value;
  input.value = "";
}

const input = document.querySelector("input");
const submit = document.querySelector("submit");
submit.addEventListener("click", changeTitleInput);

//всплытие и погружение

const divs = document.querySelectorAll("div");

//всплытие
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", function () {
//     console.log(divs[i].getAttribute("id")); //2 1
//   });
// }

//погружение true
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener(
//     "click",
//     function () {
//       console.log(divs[i].getAttribute("id")); //1 2
//     },
//     true
//   );
// }

//отмена всплытия и погружения event.stopPropagation();
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(divs[i].getAttribute("id"));
    console.log(event);
  });
}

//event это объект с полями данных о проишедшем событии
//event.target: div#id1 это сам блок по которому произошел клик

//отменить переход по ссылке  event.preventDefault();

const link = document.querySelector("a");
link.addEventListener("click", function (event) {
  event.preventDefault();
});
