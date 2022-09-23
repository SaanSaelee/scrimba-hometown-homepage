// const signUpBtn = document.querySelector(".btn__sign-up");

// signUpBtn.addEventListener("click", function () {
//   toggle();
// });

// function toggle() {
//   const blur = document.querySelector(".blur");
//   blur.classList.toggle("active");

//   const popup = document.querySelector(".sign-up-form");
//   popup.classList.toggle("active");
// }

const popup = document.querySelector(".popup");
const closeBtn = document.getElementById("closebtn");
const signUpBtn = document.querySelector(".btn__sign-up");
const hero = document.querySelector(".hero");

signUpBtn.onclick = function () {
  popup.style.display = "block";
};

// closeBtn.onclick = function () {
//   popup.style.display = "none";
// };

window.onclick = function (event) {
  console.log(event)
  if (event.target == hero) {
    popup.style.display = "none";
  }
};
