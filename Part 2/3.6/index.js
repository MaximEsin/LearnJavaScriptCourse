// 1 task Бесконечная страница
function populate() {
  while (true) {
    let windowRelativeBottom =
      document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<p>Дата: ${new Date()}</p>`
      );
    }
  }
}

// 2 task Кнопка вверх/вниз
function up() {
  window.scrollBy(0, -window.innerHeight);
}

// 3 task Загрузка видимых изображений
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;

  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let img of document.querySelectorAll("img")) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}

showVisible();
window.onscroll = showVisible;
