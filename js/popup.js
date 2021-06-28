const popBtn = document.querySelector(".popup-btn");
const formIndex = document.querySelector(".form-index");
const dayIn = document.querySelector(".input-day-in");


popBtn.addEventListener("click", function () {
  formIndex.classList.toggle("modal-show");
  dayIn.focus();
});
