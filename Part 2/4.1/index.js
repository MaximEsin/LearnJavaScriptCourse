const select = document.getElementById("genres");
select.options.map((option) => {
  console.log((option.selected = true));
  option.selected = false;
});

select.options[select.options.length] = new Option(
  "Классика",
  "classic",
  true,
  true
);
