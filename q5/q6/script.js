var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");
var closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
