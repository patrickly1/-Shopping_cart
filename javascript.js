const ulElement = document.querySelector("ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

function buttonClick() {
    const inputValue = inputElement.value;

    inputElement.value = "";

    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const newButtonElement = document.createElement("button")

    liElement.appendChild(spanElement);
    liElement.appendChild(newButtonElement);

    spanElement.textContent = inputValue;
    newButtonElement.textContent = "Delete";

    ulElement.appendChild(liElement);

    newButtonElement.addEventListener("click", function (e) {
        liElement.remove();
    });

    inputElement.focus();
}

buttonElement.addEventListener("click", buttonClick);