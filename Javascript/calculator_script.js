function addTwo(num1, num2) {
    return num1 + num2;
  }
  
  function subtractTwo(num1, num2) {
    return num1 - num2;
  }
  
  function multiplyTwo(num1, num2) {
    return num1 * num2;
  }
  
  function divideTwo(num1, num2) {
    // Check if the denominator is not zero to avoid division by zero
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Cannot divide by zero";
    }
  }
  
  function modulusTwo(num1, num2) {
    // Check if the denominator is not zero to avoid modulus by zero
    if (num2 !== 0) {
      return num1 % num2;
    } else {
      return "Cannot calculate modulus with zero";
    }
  }
  
  const calculatorButtons = document.querySelectorAll(".calculator-button");
  calculatorButtons.forEach(button => {
    button.addEventListener('click', onClickCalculatorButton);
  });
  
  function onClickCalculatorButton(event) {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let operation = event.target.getAttribute("data-operation");
    let resultTag = document.querySelector(".result");
  
    let result;
    switch (operation) {
      case "add":
        result = addTwo(num1, num2);
        break;
      case "subtract":
        result = subtractTwo(num1, num2);
        break;
      case "multiply":
        result = multiplyTwo(num1, num2);
        break;
      case "divide":
        result = divideTwo(num1, num2);
        break;
      case "modulus":
        result = modulusTwo(num1, num2);
        break;
      default:
        result = "Invalid operation";
    }
  
    resultTag.textContent = `${num1} ${getOperationSymbol(operation)} ${num2} = ${result}`;
  }
  
  function getOperationSymbol(operation) {
    switch (operation) {
      case "add":
        return "+";
      case "subtract":
        return "-";
      case "multiply":
        return "*";
      case "divide":
        return "/";
      case "modulus":
        return "%";
      default:
        return "?";
    }
  }
  