const buttons = document.querySelectorAll("button");
const calculatorInput = document.getElementById("calc-input");
const operatorButtons = document.querySelectorAll(".op-btn");
const mathOperatorButtons = document.querySelectorAll(".math-op");
const equalButton = document.getElementById("equal-btn");
const clearButton = document.getElementById("clear-btn");
function updateInputValue(e) {
  if (Number.parseInt(e.target.innerText) || e.target.innerText === "0") {
    calculatorInput.value += e.target.innerText;
    checkInputPrevious();
  } else if (e.target.innerText === "+" ||e.target.innerText === "-" ||e.target.innerText === "*" ||e.target.innerText === "/") {
    if (e.target.disable !== "true") {
      calculatorInput.value += e.target.innerText;
      checkInputPrevious();
    }
  }
}
function handleEqualClick() {
  let inputStateNumbers = calculatorInput.value.split(/[\+\-\*\/]/).filter((num) => {
    if (num !== "") {
      return num;
    }
  });
  let inputStateOperators = calculatorInput.value.match(/[+\-*/]/g);
  if (inputStateOperators && inputStateNumbers) {
    if (inputStateOperators.length < inputStateNumbers.length) {
      if (
        inputStateOperators.length === 0 ||inputStateOperators.length === inputStateNumbers.length
      ) {
      } else {
        calculatorInput.value = eval(calculatorInput.value);
      }
    }
  }
}

function handleClearClick() {
  calculatorInput.value = "";
}

function checkInputPrevious() {
  let lastIndexValue = calculatorInput.value[calculatorInput.value.length - 1];
  if (lastIndexValue === "+" ||lastIndexValue === "-" ||lastIndexValue === "*" ||lastIndexValue === "/" ||lastIndexValue === undefined) {
    mathOperatorButtons.forEach((mathOperatorButton) => {
      mathOperatorButton.disable = "true";
      mathOperatorButton.classList.add("disable-btn");
    });
  } else {
    mathOperatorButtons.forEach((mathOperatorButton) => {
      mathOperatorButton.disable = "false";
      mathOperatorButton.classList.remove("disable-btn");
      equalButton.disable = "false";
      equalButton.classList.remove("disable-btn");
    });
  }
}
equalButton.disable = "true";
equalButton.classList.add("disable-btn");

equalButton.addEventListener("click", handleEqualClick);
clearButton.addEventListener("click", handleClearClick);

buttons.forEach((button) => {
  button.addEventListener("click", updateInputValue);
});

checkInputPrevious();
