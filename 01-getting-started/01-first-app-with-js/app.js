// @ts-check

const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

const addGoal = () => {
  const enteredValue = inputEl?.value;
  const listItemElement = document.createElement("li");
  if (!enteredValue) {
    return;
  }
  listItemElement.textContent = enteredValue;
  listEl?.appendChild(listItemElement);
  inputEl.value = "";
};

buttonEl?.addEventListener("click", addGoal);
