const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");
const navbarNav = document.querySelector(".navbar-links");

const navbarToggleFunc = function () {
  navbarToggleBtn.classList.toggle("active");
  navbarNav.classList.toggle("active");
};

navbarToggleBtn.addEventListener("click", navbarToggleFunc);
