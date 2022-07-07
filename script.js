const darkMode = document.querySelector(".checkbox");
const body = document.querySelector("body");

function activeDarkMode() {
  body.classList.toggle("dark-blue");
}

darkMode.addEventListener("click", activeDarkMode);
