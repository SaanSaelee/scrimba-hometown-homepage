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
const closeBtn = document.querySelector(".closebtn");
const signUpBtn = document.querySelector(".btn__sign-up");
const hero = document.querySelector(".hero");

signUpBtn.onclick = () => {
  signUpForm.classList.toggle("active");
};

closeBtn.onclick = () => {
  signUpForm.classList.toggle("active");
};

window.onclick = function (event) {
  console.log(event);
  if (event.target == hero) {
    signUpForm.classList.remove("active");
  }
};
