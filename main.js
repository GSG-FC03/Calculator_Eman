//Declare variables
const result = document.querySelector(".result");
const calculat = document.querySelector(".calculator");

const calculator = {
  keepOperator: "",
  check: false,
  checkOperand: false,
  storeNum: "",
  firstOperand: "",
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
  calculator.firstOperand = "";
}
// To store Numbers that users enter
function digit(num) {
  if (calculator.checkOperand == true) {
    calculator.storeNum = num;
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
    calculator.firstOperand = calculator.storeNum;
    calculator.keepOperator = operat;
    calculator.check = true; // To keep last operator
    calculator.checkOperand = true; // set checkOperand true to enter new value after operator
  }

  if (operat == "=") {
    const num1 = parseFloat(calculator.firstOperand);
    const num2 = parseFloat(calculator.storeNum);
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
    calculator.check = false;
    // store result if user want to  add, subtract, multiply or divide on display result
    calculator.storeNum = res + "";
    calculator.firstOperand = res + "";
  } else {
    result.value += calculator.keepOperator;
  }
}

// To dispaly what users enters
function updateDisplay(display) {
  result.value += display;
}

//**********Start Conveter*********

const conver = document.querySelector("#conver");
function getSelectedValue() {
  if (conver.value == "USD") {
    // shekeles to USD
    console.log(conver.value);
    result.value = (parseFloat(result.value) / 3.25).toFixed(3) + "$";
  } else if (conver.value == "Shekels") {
    // USD to shekeles
    console.log(conver.value);
    result.value = (parseFloat(result.value) * 3.25).toFixed(3) + "₪";
  } else if (conver.value == "Euro") {
    //shekeles to EURO
    console.log(conver.value);
    result.value = (parseFloat(result.value) * 3.79).toFixed(3) + " €";
  } else if (conver.value == "shekelesEuro") {
    // EURO to shekeles
    console.log(conver.value);
    result.value = (parseFloat(result.value) / 3.79).toFixed(3) + "₪";
  }
  conver.value = "";
}
