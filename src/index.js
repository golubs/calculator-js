alert("Hallo fische");

const primaryColor = "red";
const primaryColor = "blue";
let anotherColor = "yellow";

alert(primaryColor);

const firstElement = document.querySelector("[name=first]");
firstElement.value = "619";

const secondElement = document.querySelector("[name=second]");

const sum = firstElement.value + secondElement.value;
alert(firstElement.value);
alert(secondElement.value);

const sum = parseInt(firstElement.value) + parseInt(secondElement);
const sum = parseInt(firstElement.value) - parseInt(secondElement);

alert(sum);

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
  const sum = parseInt(firstElement.value) - parseInt(secondInput.value);
  alert(sum);
});
