// 1 task Считаем потомков
const ul = document.querySelector("ul");
const liList = ul.querySelectorAll("li");
const liArray = Array.from(liList);

for (let li of liArray) {
  console.log(li.data);
}

console.log(liArray.length);

// 2 task Что содержит свойство nodeType?
// console.log(document.body.nodeType); // 1

// 3 task Тег в комментарии
let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert(body.firstChild.data); // BODY

// 4 task Где в DOM-иерархии "document"?
// document is an object of DocumentHtml class, which is inherited from Node class, which is inherited from EventTarget class, which is inherited from Object class.
// document is on 4th place in DOM hierarchy.
// document inherits from Node class, but not from Element class or HTMLElement class.
