// Modal items
const modal = document.getElementById("email-modal-container");
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
