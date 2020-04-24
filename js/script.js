"usestrict"

const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active")
  } else {
    mobileMenu.classList.add("active")
  }
});

