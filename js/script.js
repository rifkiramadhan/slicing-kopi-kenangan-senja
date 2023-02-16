// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  // Selama yg diklik bukan navbar dan bukan hamburger
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // Hilangkan class active
    navbarNav.classList.remove("active");
  }
});
