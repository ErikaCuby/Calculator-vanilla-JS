const displayHistory = document.querySelector(".display-history");
const displayCalculator = document.querySelector(".display-calculator");
const displayTempResult = document.querySelector(".display-temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clear-all");
const clearLastEntity = document.querySelector(".clear-last-entity");

let disHistoryNum = "";
let disCalculatorNum = "";
let result = null;
let lastOperation = "";
let haveDot = false;

//making sure, we gonna have only 1 dot in the number
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    //display numbers after clicking on keyboard
    disCalculatorNum += e.target.innerText;
    displayCalculator.innerText = disCalculatorNum;
  });
});

//making sure, we gonna have a number first before adding any oparetion
operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!disCalculatorNum) return;
    //putting haveDot to false, because with new number we can add another dot
    haveDot = false;
    const operationName = e.target.innerText;
    if (disHistoryNum && displayCalculator && lastOperation) {
      mathOperation();
    } else {
      //e.target.innerText stored in displayCalculatorNum is a string and parseFloat is returning it to a number
      result = parseFloat(disCalculatorNum);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

//added number and a operation will move to History display  from Calculator display and make it clear
function clearVar(name = "") {
  disHistoryNum += disCalculatorNum + "" + name + "";
  displayHistory.innerText = disHistoryNum;
  displayCalculator.innerText = "0";
  disCalculatorNum = "";
  //showing temporary results
  displayTempResult.innerText = result;
}

//function for turning strings into numbers and perform calculations with real mat operations
function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(disCalculatorNum);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(disCalculatorNum);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(disCalculatorNum);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(disCalculatorNum);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(disCalculatorNum);
  }
}

// functionality for equal button
equal.addEventListener("click", (e) => {
  if (!disCalculatorNum || !disHistoryNum) return; //if we don't have 1st and 2nd number, return nothing
  haveDot = false;
  mathOperation();
  clearVar();
  displayCalculator.innerText = result;
  displayTempResult.innerText = "";
  disCalculatorNum = result;
  disHistoryNum = "";
});

//functionality for clear All button
clearAll.addEventListener("click", (e) => {
  displayCalculator.innerText = "0";
  displayHistory.innerText = "0";
  displayTempResult.innerText = "0";
  disCalculatorNum = "";
  disHistoryNum = "";
  result = "";
});

//functionality for clear last entity button
clearLastEntity.addEventListener("click", (e) => {
  displayCalculator.innerText = "0";
  disCalculatorNum = "";
});

//https://www.youtube.com/watch?v=0Vg4EiYPCUc
