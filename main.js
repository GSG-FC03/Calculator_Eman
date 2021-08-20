//Declare variables
const result = document.querySelector(".result");
const calculat = document.querySelector(".calculator");
let numbers = [];
let storeNum = "";

// use obj to keep the first operator
const calculator = {
  keepOperator: "",
  check: false,
  checkOperand: false,
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
    default:
      if (!isNaN(Number(value)) || value == ".") digit(value);
      break;
  }
});

// When click on C button, remove result and reset arr & object
function clearScreen() {
  result.value = "";
  numbers = [];
  calculator.keepOperator = "";
  calculator.check = false;
  calculator.checkOperand = false;
  storeNum = "";
}
// To store Numbers that users enter in array
function digit(num) {
  if (calculator.checkOperand == true) {
    numbers.push(parseFloat(num));
    calculator.checkOperand = false;
  } else {
    // check if user enterd two digit Ex. 22,222,.... and store it on array
    storeNum += num;
    numbers.push(parseFloat(storeNum));
  }
  updateDisplay(num);
}

// To calaulat numbers depending on operator
function operator(oprat) {
  let res;
  if (calculator.check == false) {
    calculator.keepOperator = oprat;
    calculator.check = true; // To keep last operator
    calculator.checkOperand = true; // set checkOperand true to enter new value after operator
  }

  if (oprat == "=") {
    const num1 = numbers.pop();
    const num2 = numbers.pop();
    if (calculator.keepOperator == "+") {
      res = num1 + num2;
    } else if (calculator.keepOperator == "x") {
      res = num1 * num2;
    } else if (calculator.keepOperator == "/") {
      if (num1 == 0) res = "NAN";
      else res = num2 / num1;
    } else if (calculator.keepOperator == "-") {
      res = num2 - num1;
    }
    result.value = res;
  } else {
    result.value += calculator.keepOperator;
  }
}

// To dispaly what users enters
function updateDisplay(display) {
  result.value += display;
}
