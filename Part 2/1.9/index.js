// 1 task Найти размер прокрутки снизу
function getScrollBottom(elem) {
  return elem.scrollHeight - elem.scrollTop - elem.clientHeight;
}

// 2 task Узнать ширину полосы прокрутки
function getScrollbarWidth(elem) {
  return elem.scrollWidth - elem.clientWidth;
}

// 3 task Поместите мяч в центр поля
function placeBall(ball, field) {
  ball.style.left = field.clientWidth / 2 - ball.clientWidth / 2 + "px";
  ball.style.top = field.clientHeight / 2 - ball.clientHeight / 2 + "px";
}

// 4 task В чём отличие CSS-свойств width и clientWidth
// width - ширина элемента, включая padding и border
// clientWidth - ширина элемента, включая padding, но без border
// clientWidth - возвращает число, width - строку с единицами измерения
