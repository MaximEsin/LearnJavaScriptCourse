// 1 task Найдите неотрицательные целые
let regexp = /(?<!-)\d+?/g;

let str = "0 12 -5 123 -18";

alert(str.match(regexp)); // 0, 12, 123

// 2 task Вставьте после фрагмента
let regexpp = /<body.*?>/;

let strr = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

strr = strr.replace(regexpp, `<h1>Hello</h1>`);
