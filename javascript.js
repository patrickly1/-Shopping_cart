const listElement = document.querySelector("ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

function buttonClick() {
    const inputValue = inputElement.value;

    inputElement.value = "";
}

buttonElement.addEventListener("click", buttonClick);