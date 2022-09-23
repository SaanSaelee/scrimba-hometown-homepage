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

const signUpForm = document.querySelector(".sign-up-form");
const closeBtn = document.getElementById("closebtn");
const signUpBtn = document.querySelector(".btn__sign-up");
const hero = document.querySelector(".hero");

signUpBtn.onclick = function () {
  signUpForm.classList.toggle("active");
};

// closeBtn.onclick = function () {
//   popup.style.display = "none";
// };

window.onclick = function (event) {
  console.log(event);
  if (event.target == hero) {
    signUpForm.style.display = "none";
    signUpForm.classList.toggle("active");
  }
  
};
