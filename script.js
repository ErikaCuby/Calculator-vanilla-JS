const displayHistory = document.querySelector(".display-history");
const displayCalculator = document.querySelector(".display-calculator");
const displayTempResult = document.querySelector(".display-temp-result");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
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
