const calInput = document.querySelectorAll(".calculator form input");
const output = document.querySelector(".output");

function inputValue() {
  output.value += calInput.value;
}

function onConsole() {
  calInput.forEach((input) => input.inputValue);
}

calInput.addEventListener("click", inputValue);
