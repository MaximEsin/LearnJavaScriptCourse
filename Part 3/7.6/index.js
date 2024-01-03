// 1 task Java[^script]
const str1 = "Java"; // No
const str2 = "JavaScript"; // Yes

const regexp = /Java[^script]/;

// 2 task Найдите время как hh:mm или hh-mm
let regexpp = /\d\d[-:]\d\d/g;
alert("Завтрак в 09:00. Ужин в 21-30".match(regexpp)); // 09:00, 21-30
