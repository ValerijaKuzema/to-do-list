"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const addButton = document.querySelector(".add-new-todo-btn");
  const inputField = document.querySelector(".input-field-todo");
  const addToTrash = document.querySelector(".destroy");

  addButton.addEventListener("click", (event) => {
    event.preventDefault();

    const text = inputField.value;
    if (text === "") {
      return
    }

    const newButtonElement = document.createElement("button");
    newButtonElement.classList.add("destroy");

    const newLabelElement = document.createElement("label");
    newLabelElement.innerText = text;

    const newCheckboxElement = document.createElement("input");
    newCheckboxElement.type = "checkbox";
    newCheckboxElement.classList.add("toggle");

    const newDivElement = document.createElement("div");

    newDivElement.appendChild(newCheckboxElement);
    newDivElement.appendChild(newLabelElement);
    newDivElement.appendChild(newButtonElement);

    let newliElement = document.createElement("li");
    newliElement.classList.add("list-element");
    newliElement.appendChild(newDivElement);

    const ulElement = document.querySelector(".list-group");
    ulElement.prepend(newliElement);

    inputField.value = "";
  })

  const checkbox = document.querySelector(".checkbox");

  if (checkbox.classList.checked) {
    checkbox.classList.add("background-color-task");
  }


  addToTrash.addEventListener("click", () => {
  //   const removeLiElement = document.getElementsByClassName("list-element");
  //   removeLiElement.remove;

      console.log("trash was clicked");
  })

});
