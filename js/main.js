"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const addButton = document.querySelector(".add-new-todo-btn");
  const inputField = document.querySelector(".input-field-todo");

  // function for checkbox and destory-button

  const callbackForTask = (liElement) => {

    const checkboxElement = document.querySelector(".checkbox");
    const cancel = document.querySelector(".destroy");

    // checkboxElement.addEventListener("change", (event) => {
    //   if (checkboxElement.checked) {
    //     liElement.classList.add("completed");
    //   }
    //   else {
    //     liElement.classList.remove("completed");
    //   }
    // });

    cancel.addEventListener("click", (event) => {
      liElement.remove();
    });

  }


  //Eventlistener for the addButton

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

    callbackForTask(newliElement);

    inputField.value = "";
  })

});
