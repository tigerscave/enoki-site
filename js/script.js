"usestrict"

const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", () => {
  if (mobileMenu.className === "mobile-menu active") {
    mobileMenu.className = "mobile-menu inactive"
  } else {
    mobileMenu.className = "mobile-menu active"
  }
})

