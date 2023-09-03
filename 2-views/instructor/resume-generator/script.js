// Function to add more education input fields
document.getElementById("add-education").addEventListener("click", function () {
  const educationContainer = document.getElementById("education-container");
  const numEducationInputs =
    educationContainer.querySelectorAll(".education-entry").length + 2;

  const entryContainer = document.createElement("div");
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  entryContainer.classList.add("education-entry");

  const newInput = createInputField(
    "text",
    `education[${numEducationInputs - 1}]`,
    true
  );
  const newLabel = createLabel(`Education ${numEducationInputs}: `);
  const removeButton = createRemoveButton(entryContainer);

  entryContainer.appendChild(newLabel);
  inputContainer.appendChild(newInput);
  inputContainer.appendChild(removeButton);
  entryContainer.appendChild(inputContainer);

  educationContainer.appendChild(entryContainer);
});

// Function to add more experience input fields
document
  .getElementById("add-experience")
  .addEventListener("click", function () {
    const experienceContainer = document.getElementById("experience-container");
    const numExperienceInputs =
      experienceContainer.querySelectorAll(".experience-entry").length + 2;

    const entryContainer = document.createElement("div");
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");
    entryContainer.classList.add("experience-entry");

    const newInput = createInputField(
      "text",
      `experience[${numExperienceInputs - 1}]`,
      true
    );
    const newLabel = createLabel(`Experience ${numExperienceInputs}: `);
    const removeButton = createRemoveButton(entryContainer);

    entryContainer.appendChild(newLabel);
    inputContainer.appendChild(newInput);
    inputContainer.appendChild(removeButton);
    entryContainer.appendChild(inputContainer);

    experienceContainer.appendChild(entryContainer);
  });

function createInputField(inputType, inputName, required) {
  const newInput = document.createElement("input");
  newInput.type = inputType;
  newInput.name = inputName;
  newInput.required = required;
  return newInput;
}

function createLabel(labelText) {
  const newLabel = document.createElement("label");
  newLabel.textContent = labelText;
  return newLabel;
}

function createRemoveButton(entryContainer) {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button"); // Add the "remove-button" class
  removeButton.addEventListener("click", function () {
    removeInputField(entryContainer);
  });
  return removeButton;
}

function removeInputField(entryContainer) {
  const container = entryContainer.parentElement;
  container.removeChild(entryContainer);
}
