const mode = document.querySelector(".nav__image");
const root = document.documentElement; // Seleciona o :root

mode.addEventListener("click", () => {
  if (root.classList.contains("lightmode")) {
    root.classList.remove("lightmode");
    root.classList.add("darkmode");
    mode.classList.remove("lightmode");
    mode.classList.add("darkmode");
    mode.src = "./public/img/light off.svg";
  } else {
    root.classList.remove("darkmode");
    root.classList.add("lightmode");
    mode.classList.remove("darkmode");
    mode.classList.add("lightmode");
    mode.src = "./public/img/light on.svg";
  }
});
