const popBtn = document.querySelector(".popup-btn");
const formIndex = document.querySelector(".form-index");
const dayIn = document.querySelector(".input-day-in");
const dayOut = document.querySelector(".input-day-out");
const adult = document.querySelector(".adult-input");
const child = document.querySelector(".child-input");

popBtn.addEventListener("click", function () {
  formIndex.classList.toggle("modal-show");
});

formIndex.addEventListener("submit", function (evt) {
  if (!dayIn.value || !dayOut.value || !adult.value || !child.value) {
    evt.preventDefault();
    formIndex.classList.toggle("modal-error");
  } else {
    dayIn.setItem("in", dayIn.value);
    dayOut.setItem("out", dayOut.value);
    adult.setItem("adult", adult.value);
    child.setItem("child", child.value);
  }
});