const BTN = document.querySelector('.menu-burger');
const ALL_LINK = document.querySelectorAll('.menu-list .menu-link');
const MENU = document.querySelector('.menu-list');

function viewMenu() {
  MENU.classList.toggle('action');
}

function closeMenu() {
  MENU.classList.remove('action');
}

BTN.addEventListener('click', viewMenu);
ALL_LINK.forEach((el) => el.addEventListener('click', closeMenu));

console.log('Самопроверка:');
console.log('+10 студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages');
console.log('+10 вёрстка валидная');
console.log('+5 header, main, footer');
console.log('+5 элемент nav');
console.log('+5 только один заголовок h1');
console.log('+5 заголовки h2');
console.log(
  '+10 в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс. Если ссылка в футере ведёт на курс stage0, это не ошибка.'
);
console.log('+10 для оформления СV используются css-стили');
console.log(
  '+10 при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону'
);
console.log(
  '+10 на странице СV есть фото или аватарка автора, пропорции изображения не искажены (т.е. картинка не деформирована, если её размер изменён, сохраняются пропорции исходного изображения), у изображения есть атрибут alt.'
);
console.log(
  '+10 навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a. Также допускается использование нумерованого списка ol > li или ol > li > a'
);
console.log('+5 краткую информацию о себе');
console.log('+5 контакты для связи');
console.log('+5 перечень навыков');
console.log('+5 пример кода. Код добавляется при помощи символов и тегов, а не картинкой');
console.log('+5 перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения');
console.log('+5 информацию об образовании и уровне английского');
console.log('+10 CV выполнено на английском языке');
console.log('130 баллов из 130 возможных');
