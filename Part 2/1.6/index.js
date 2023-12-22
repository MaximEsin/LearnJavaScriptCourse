// 1 task Получите атрибут
let div = document.querySelector("div");
console.log(div.dataset.widgetName);

// 2 task Сделайте внешние ссылки оранжевыми
const links = document.querySelectorAll("a");
const linksArray = Array.from(links);

for (let link of linksArray) {
  let href = link.getAttribute("href");
  if (!href) continue;
  if (href.includes("://") && !href.includes("http://internal.com")) {
    link.style.color = "orange";
  }
}
