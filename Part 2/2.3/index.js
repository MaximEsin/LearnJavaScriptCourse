// 1 task Спрячьте сообщения с помощью делегирования
const container = document.getElementById("container");
container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.hidden = true;
  }
});

// 2 task Раскрывающееся дерево
const tree = document.getElementById("tree");
tree.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    event.target.nextElementSibling.hidden =
      !event.target.nextElementSibling.hidden;
  }
});

// 3 task Сортируемая таблица
function sortTable(table, col, reverse) {
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.rows);
  const compare = (rowA, rowB) => {
    const cellA = rowA.cells[col].innerHTML;
    const cellB = rowB.cells[col].innerHTML;
    return cellA > cellB ? 1 : -1;
  };
  rows.sort(compare);
  if (reverse) rows.reverse();
  tbody.append(...rows);
}

// 4 task Поведение "подсказка"
const tooltip = document.getElementById("tooltip");
document.addEventListener("mouseover", (event) => {
  if (event.target.dataset.tooltip) {
    tooltip.innerHTML = event.target.dataset.tooltip;
    tooltip.style.left = event.clientX + "px";
    tooltip.style.top = event.clientY + "px";
    tooltip.hidden = false;
  }
});
document.addEventListener("mouseout", (event) => {
  if (event.target.dataset.tooltip) {
    tooltip.hidden = true;
  }
});
