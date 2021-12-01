//Аттрибуты

//  <a href="https://yandex.ru/" title="Ссылка на яндекс" target="_blank">Yandex </a>

const a = document.querySelector("a");
console.log(a);

//получить объект с аттрибутами
//NamedNodeMap {0: href, 1: title, 2: target, href: href, title: title, target: target, length: 3}
console.log(a.attributes);

//получить аттрибут
console.log(a.getAttribute("href")); // https://yandex.ru/
console.log(a.getAttribute("title")); // Ссылка на яндекс
console.log(a.getAttribute("target")); // _blank

//изменить аттрибут
a.setAttribute("href", "https://www.google.com/");
a.setAttribute("title", "ссылка на гугл");
a.removeAttribute("title");
a.textContent = "GOOGLE";
console.log(a);
