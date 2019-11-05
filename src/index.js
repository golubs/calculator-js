alert("Hallo Welt");

const primaryColor = "red";
const secondaryColor = "blue";
let anotherColor = "yellow";

alert("primaryColor");

const firstElement = document.querySelector("[name=first]");
firstElement.value = "619";

const secondElement = document.querySelector("[name=second]");

const sum = firstElement.value + secondElement.value;
alert(firstElement.value);
alert(secondElement.value);

alert(sum);

const sum2 = parseInt(firstElement.value) + parseInt(secondElement.value);

alert(sum2);

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
  const sum3 = parseInt(firstElement.value) - parseInt(secondElement.value);
  alert(sum3);
});
