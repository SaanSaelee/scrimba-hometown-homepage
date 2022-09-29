// Modal items
const modal = document.getElementById("modal__container");
const openBtn = document.querySelector(".btn__sign-up");
const closeBtn = document.querySelector(".close-btn");

// Click events
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Form Validation
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

// Show error message
function showError(input, message) {
    // targeting parent class which is each validation div
    const formValidation = input.parentElement;
    formValidation.className = "modal__form-validation error";

    const errorMessage = formValidation.querySelector(".error-msg");
    errorMessage.innerText = message;
}

// Show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = "modal__form-validation valid";
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showValid(input);
    }
}

// Check passwords match
function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// Get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);
    checkLength(name, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
});

// *****************************

// Image heart

const heartBtn = document.querySelectorAll(".fa-heart");

heartBtn.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
    });
});

// *****************************

// Shopping Cart
const shoppingCart = document.querySelector(".fa-cart-shopping");
const cartContent = document.querySelector(".cart__content");
const cartCloseBtn = document.querySelector(".btn__close--cart");
const cartContainer = document.querySelector(".cart__container");

shoppingCart.addEventListener("click", () => {
    cartContent.classList.toggle("active");
});

cartCloseBtn.addEventListener("click", () => {
    cartContent.classList.remove("active");
});

// *****************************

// Mobile Navbar

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navItem = document.querySelectorAll(".nav__item");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        navbar.classList.remove("active");
        openBtn.classList.remove("active");
    });
});

// *****************************
