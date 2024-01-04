// 1 task Найдите языки программирования
let regexp = /Java|JavaScript|PHP|C\+\+|C/gi;

alert("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++

// 2 task Найдите пары BB-кодов
let regexpp = /\[url|b\quote\].+?\[\/\1]/gi;

let str = "..[url][b]http://ya.ru[/b][/url]..";
alert(str.match(regexpp)); // [url][b]http://ya.ru[/b][/url]

// 3 task Найдите строки в кавычках
let strr = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';

// эта строка в памяти:
alert(strr); //  .. "test me" .. "Скажи \"Привет\"!" .. "\\ \"" ..

let regexppp = /"(\\.|[^"\\])*"/g;

// 4 task Найдите весь тег
let regexppppp = /<style(>|\s.*?>)/g;

alert('<style> <styler> <style test="...">'.match(regexppppp)); // <style>, <style test="...">
