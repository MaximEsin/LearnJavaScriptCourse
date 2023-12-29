const textarea = document.querySelector("textarea");

textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});
