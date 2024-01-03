// 1 task Совпадение для /d+? d+?/
"123 456".match(/\d+? \d+?/g); // 123, 4

// 2 task Поиск HTML-комментариев
let regexp = /<!--.*?-->/gs;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

alert(str.match(regexp)); // '<!-- My -- comment \n test -->', '<!---->'

// 3 task Поиск HTML-тегов
let regexpp = /<[^<>]+>/g;

let strr = '<> <a href="/"> <input type="radio" checked> <b>';

alert(strr.match(regexpp)); // '<a href="/">', '<input type="radio" checked>', '<b>'
