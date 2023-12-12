// 1 task Сделать первый символ заглавным
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("вася") == "Вася";

// 2 task Проверка на спам
function checkSpam(str) {
  let lStr = str.toLowerCase();
  return lStr.includes("viagra") || lStr.includes("xxx");
}

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;

// 3 task Усечение строки
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"

// 4 task Выделить число
function extractCurrencyValue(str) {
  return +str.slice(1);
}