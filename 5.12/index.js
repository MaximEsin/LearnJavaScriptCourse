// 1 task Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35,
};
let json = JSON.stringify(user);
let result = JSON.parse(json);

// 2 task Исключить обратные ссылки
let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
