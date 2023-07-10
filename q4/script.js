var toggleCheckbox = document.getElementById("toggle");
var menu = document.querySelector(".menu");

toggleCheckbox.addEventListener("click", function() {
  menu.classList.toggle("show");
});
