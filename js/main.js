"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const addButton = document.querySelector(".add-new-todo-btn");
  const inputField = document.querySelector(".input-field-todo");
  const ulElement = document.querySelector("ul.list-group");

  addButton.addEventListener("click", (event) => {
    event.preventDefault;
    console.log("button was clicked!");
    const text = inputField.value;
    console.log(text);

    if (text === "") {
      return
    }

    let newliElement = document.createElement("li");
    newliElement.classList.add("list-element")
    console.log(newliElement);

    // let newCheckbox = document.createElement("input");
    // newliElement.appendChild(newCheckbox);

    newliElement.innerText = text;

    const ulElement = document.querySelector("ul.list-group");
    ulElement.appendChild(newliElement);

    inputField.value = "";
  })

});
