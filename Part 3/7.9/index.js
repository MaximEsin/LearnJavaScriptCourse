// 1 task Как найти многоточие "..." ?
let regexp = /\.{3,}/g;
alert("Привет!... Как дела?.....".match(regexp)); // ..., .....

// 2 task Регулярное выражение для HTML-цветов
let regexpp = /#[A-F0-9a-f]{6}\b/;

let str =
  "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

alert(str.match(regexpp)); // #121212,#AA00ef
