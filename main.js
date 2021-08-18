//Declare variables
const result = document.querySelector(".result");
const calculat = document.querySelector(".calculator");
let numbers = [];

// use obj to keep the first operator
const calculator = {
  keepOperator: "",
  check: false,
};

// Add listener on section calculator
calculat.addEventListener("click", function (event) {
  const value = event.target.value;
  switch (value) {
    case "+":
    case "-":
    case "x":
    case "/":
    case "=":
      operator(value);
      break;
    case ".":
      decimal(value);
      break;
    default:
      if (!isNaN(Number(value))) digit(value);
      break;
  }
});

// When click on C button, remove result and reset arr & object
function clearScreen() {
  result.value = "";
  numbers = [];
  calculator.keepOperator = "";
  calculator.check = false;
}

// To store Numbers that users enter in array
function digit(num) {
  numbers.push(parseFloat(num));
  updateDisplay(num);
}

// To calaulat numbers depending on operator
function operator(oprat) {
  updateDisplay(oprat);
  let res;
  if (calculator.check == false) {
    calculator.keepOperator = oprat;
    calculator.check = true;
  }
  if (numbers.length >= 2) {
    const num1 = numbers.pop();
    const num2 = numbers.pop();
    if (calculator.keepOperator == "+") {
      res = num1 + num2;
      console.log(res); // To check result
    } else if (calculator.keepOperator == "x") {
      res = num1 * num2;
      console.log(res);
    } else if (calculator.keepOperator == "/") {
      if (num1 == 0) res = "NAN";
      else res = num2 / num1;
      console.log(res);
    } else if (calculator.keepOperator == "-") {
      res = num2 - num1;
      console.log(res);
    } else if (oprat == "=") {
      result.value = res;
      console.log(res);
    }
  }
}

// To dispaly what users enters
function updateDisplay(display) {
  result.value += display;
}
function decimal(dot) {}
