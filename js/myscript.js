"use strict";

const main = () => {
  const menuIconEl = document.getElementById("menu-icon")

  console.log(menuIconEl)
  menuIconEl.addEventListener('click', () => {
    console.log("click icon")
  })
}

window.addEventListener('DOMContentLoaded', main);