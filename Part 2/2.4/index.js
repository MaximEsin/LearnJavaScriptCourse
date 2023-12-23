// 1 task Почему не работает return false?
{
  /* <script> */
}
function handler() {
  alert("...");
  return false;
}
{
  /* </script> */
}

// <a href="https://w3.org" onclick="return handler()">браузер откроет w3.org</a>

// 2 task Поймайте переход по ссылке
const contents = document.querySelector("#contents");
contents.addEventListener("click", handler);
function handler(event) {
  if (event.target.tagName !== "A") return;
  event.preventDefault();
  confirm("Перейти по ссылке " + event.target.href + "?");
}

// 3 task Галерея изображений
// This task is mainly html/css
