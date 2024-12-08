const mode = document.querySelector(".nav__image");
const root = document.documentElement;
const charButton = document.querySelectorAll(".charKey");
let display = document.getElementById("displayCalculatorInput");

function blockBoard(event) {
  event.preventDefault();
  event.stopPropagation();
}

document.addEventListener("keydown", blockBoard);
document.addEventListener("keypress", blockBoard);
document.addEventListener("keyup", blockBoard);

charButton.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.classList.contains("operator")) {
      const value = key.dataset.value + " ";
      display.value += value;
    } else if (
      key.classList.contains("number") ||
      key.classList.contains("float")
    ) {
      const value = key.dataset.value;
      display.value += value;
    } else if (key.classList.contains("equal")) {
      console.log("aqui vai ser calculado");
    } else if (key.classList.contains("clear")) {
      display.value = "";
    }
  });
});

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
