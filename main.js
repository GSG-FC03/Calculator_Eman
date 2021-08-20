//Declare variables
const result = document.querySelector(".result");
const calculat = document.querySelector(".calculator");

const calculator = {
  keepOperator: "",
  check: false,
  checkOperand: false,
  storeNum:'',
  firstOperand:''
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

// When click on C button, remove result and reset object & variabels
function clearScreen() {
  result.value = "";
  calculator.keepOperator = "";
  calculator.check = false;
  calculator.checkOperand = false;
  calculator.storeNum = "";
  calculator.firstOperand='';
}
// To store Numbers that users enter 
function digit(num) {
  if (calculator.checkOperand == true) {
    calculator.storeNum=num;
    calculator.checkOperand = false;
  } else {
    // check if user enterd two digit Ex. 22,222,.... and store it on array
    calculator.storeNum += num;
  }
  updateDisplay(num);
}

// To calaulat numbers depending on operator
function operator(operat) {
  let res;
  if (calculator.check == false) {
    calculator.firstOperand=calculator.storeNum
    calculator.keepOperator = operat;
    calculator.check = true; // To keep last operator
    calculator.checkOperand = true; // set checkOperand true to enter new value after operator
  }

  if (operat == "=") {
    const num1 = parseFloat(calculator.firstOperand)
    const num2 = parseFloat(calculator.storeNum)
    if (calculator.keepOperator == "+") {
      res = num1 + num2;
    } else if (calculator.keepOperator == "x") {
      res = num1 * num2;
    } else if (calculator.keepOperator == "/") {
      if (num2 == 0) res = "NAN";
      else res = num1 / num2;
    } else if (calculator.keepOperator == "-") {
      res = num1 - num2;
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
