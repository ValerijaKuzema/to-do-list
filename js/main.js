"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const addButton = document.querySelector(".add-new-todo-btn");
  const inputField = document.querySelector(".input-field-todo")

  addButton.addEventListener("click",() => {
    console.log("button was clicked!");
  })

  inputField.addEventListener("keyup", () => {
    const newToDo = inputField.value;
    console.log(newToDo)
  })

});
