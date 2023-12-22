// 1 task Создайте дату
alert(new Date(2012, 1, 20, 3, 12));

// 2 task Покажите день недели
let date = new Date(2012, 0, 3); // 3 января 2012 года
function getWeekDay(date) {
  let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return days[date.getDay()];
}
alert(getWeekDay(date));

// 3 task День недели в европейской нумерации
let datee = new Date(2012, 0, 3); // 3 января 2012 года
function getLocalDay(datee) {
  let day = datee.getDay();
  if (day == 0) {
    // день 0 становится 7
    day = 7;
  }
  return day;
}
alert(getLocalDay(datee));

// 4 task Какой день месяца был много дней назад?
let dateee = new Date(2015, 0, 2);

function getDateAgo(dateee, days) {
  let dateCopy = new Date(dateee);

  dateCopy.setDate(dateCopy.getDate() - days);
  return dateCopy.getDate();
}

alert(getDateAgo(dateee, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(dateee, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(dateee, 365)); // 2, (2 Jan 2014)

// 5 task Последнее число месяца?
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// 6 task Сколько сегодня прошло секунд?
function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // перевести в секунды и округлить
}

// 7 task Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );

  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // перевести в секунды и округлить
}

// 8 task Форматирование относительной даты
function formateDate(date) {
  let now = new Date();
  let diff = (now - date) * 1000; // разница в секундах

  if (diff < 1) {
    return "только что";
  } else if (diff < 60) {
    return diff + `${diff} сек. назад`;
  } else if (diff < 3600) {
    return `${diff * 60} мин. назад`;
  } else {
    let d = date;
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes(),
    ].map((component) => component.slice(-2));

    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
  }
}
