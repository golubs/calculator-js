"use strict";

import { sum, difference, product, quotient } from "./lib/operators";

const primaryColor = "red";
const secondaryColor = "blue";
let anotherColor = "yellow";

// alert("primaryColor");

const firstElement = document.querySelector("[name=first]");
firstElement.value = "619";

const secondElement = document.querySelector("[name=second]");

const sum1 = firstElement.value + secondElement.value;
// alert(firstElement.value);
// alert(secondElement.value);

// alert(sum);

const sum2 = parseInt(firstElement.value) + parseInt(secondElement.value);

// alert(sum2);

const additionButton = document.querySelector(".sum");
const subtractionButton = document.querySelector(".sub");
const multiplicationButton = document.querySelector(".mult");
const divisionButton = document.querySelector(".div");

// submitButton.addEventListener("click", function() {
//   const sum3 = parseInt(firstElement.value) - parseInt(secondElement.value);
//   alert(sum3);
// });

// HTML Element holen
// quarySelecotor beser als getelementbyid oder byclass
const result = document.querySelector("#result");

additionButton.addEventListener("click", function() {
  // const sum = parseInt(firstInput.value) - parseInt(secondInput.value);
  // result.innerHTML = sum;

  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = sum(firstNumber, secondNumber);
});

// subtractionButton.addEventListener("click", function() {
//   const firstNumber = parseInt(firstElement.value);
//   const secondNumber = parseInt(secondElement.value);
//   result.innerHTML = sub(firstNumber, secondNumber);
// });

multiplicationButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = multiply(firstNumber, secondNumber);
});

divisionButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = divide(firstNumber, secondNumber);
});

// Working with a function for getting input, example for sub
function getInput() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);

  return {
    first: firstNumber,
    second: secondNumber
  };
}

suButton.addEventListener("click", function() {
  const numbers = getInput();
  result.innerHTML = sub(number.first, numbers.second);
});

// This would also work with arrow-functions
