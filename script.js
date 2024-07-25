const displayHistory = document.querySelector(".display-history");
const displayCalculator = document.querySelector(".display-calculator");
const displayTempResult = document.querySelector(".display-temp-result");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clear-all");
const clearLastEntity = document.querySelector(".clear-last-entity");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;