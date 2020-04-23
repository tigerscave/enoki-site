"usestrict"

const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("active") === false) {
    mobileMenu.classList.add("active")
  } else {
    mobileMenu.classList.remove("active")
  }
});

