const allTagsBox = document.querySelector(".allTags");
// 1. Ingredient section
const ingredientDropdownItems = document.getElementById(
  "ingredientDropdownItems"
);
const ingredientTagsBox = document.getElementById("ingredientTagsBox");

// See filter.js
function addIngredientTag(ingredient) {
  console.log("Ingredient tag check:", ingredient);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = ingredient;
  // Append tag to the ingredientTagsBox div
  ingredientTagsBox.appendChild(tag);

  // Add tag to the allTags div if it doesn't already exist
  const existingTags = allTagsBox.querySelectorAll(".tag");
  let existingTag = false;
  for (let i = 0; i < existingTags.length; i++) {
    if (
      existingTags[i].textContent.toLowerCase() === ingredient.toLowerCase()
    ) {
      existingTag = true;
      break;
    }
  }
  if (!existingTag) {
    const allTagsTag = document.createElement("span");
    allTagsTag.classList.add("tag");
    allTagsTag.textContent = ingredient;
    allTagsBox.appendChild(allTagsTag);
  }

  // Hide the ingredientList in the dropdown list
  const dropdownItems =
    ingredientDropdownItems.getElementsByClassName("ingredientList");
  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    if (item.textContent.toLowerCase() === ingredient.toLowerCase()) {
      item.style.display = "none";
      break;
    }
  }
}

// Remove tag from the ingredientTagsBox div and show it in the dropdown list
ingredientTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove(); // Remove the clicked ingredient tag

    // Show the corresponding ingredientList in the dropdown
    const dropdownItems =
      ingredientDropdownItems.getElementsByClassName("ingredientList");
    for (let i = 0; i < dropdownItems.length; i++) {
      const item = dropdownItems[i];
      if (
        item.innerText.toLowerCase() === event.target.textContent.toLowerCase()
      ) {
        item.style.display = "block";
        break;
      }
    }
  }
});

// 2. Appliance section
const applianceDropdownItems = document.getElementById(
  "applianceDropdownItems"
);
const applianceTagsBox = document.getElementById("applianceTagsBox");

function addApplianceTag(appliance) {
  console.log("Appliance tag check:", appliance);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = appliance;
  // Append tag to the applianceTagsBox div
  applianceTagsBox.appendChild(tag);

  // Add tag to the allTags div if it doesn't already exist
  const existingTags = allTagsBox.querySelectorAll(".tag");
  let existingTag = false;
  for (let i = 0; i < existingTags.length; i++) {
    if (existingTags[i].textContent.toLowerCase() === appliance.toLowerCase()) {
      existingTag = true;
      break;
    }
  }
  if (!existingTag) {
    const allTagsTag = document.createElement("span");
    allTagsTag.classList.add("tag");
    allTagsTag.textContent = appliance;
    allTagsBox.appendChild(allTagsTag);
  }

  // Hide the applianceList in the dropdown list
  const dropdownItems =
    applianceDropdownItems.getElementsByClassName("applianceList");
  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    if (item.textContent.toLowerCase() === appliance.toLowerCase()) {
      item.style.display = "none";
      break;
    }
  }
}

// Remove tag from the applianceTagsBox div and display it in the dropdown list
applianceTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});

// 3. Utensil section
const utensilDropdownItems = document.getElementById("utensilDropdownItems");
const utensilTagsBox = document.getElementById("utensilTagsBox");

function addUtensilTag(utensil) {
  console.log("Utensil tag check:", utensil);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = utensil;
  // Append the tag to the utensilTagsBox div
  utensilTagsBox.appendChild(tag);

  // Add tag to the allTags div if not existing
  const existingTags = allTagsBox.querySelectorAll(".tag");
  let existingTag = false;
  for (let i = 0; i < existingTags.length; i++) {
    if (existingTags[i].textContent.toLowerCase() === utensil.toLowerCase()) {
      existingTag = true;
      break;
    }
  }
  if (!existingTag) {
    const allTagsTag = document.createElement("span");
    allTagsTag.classList.add("tag");
    allTagsTag.textContent = utensil;
    allTagsBox.appendChild(allTagsTag);
  }

  // Hide the ingredientList in the dropdown list
  const dropdownItems =
    utensilDropdownItems.getElementsByClassName("utensilList");
  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    if (item.textContent.toLowerCase() === utensil.toLowerCase()) {
      item.style.display = "none";
      break;
    }
  }
}

// Remove tag from the ingredientTagsBox div and show it in the dropdown list
utensilTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove(); // Remove the clicked utensil tag

    // Show the corresponding utensilList in the dropdown
    const dropdownItems =
      utensilDropdownItems.getElementsByClassName("utensilList");
    for (let i = 0; i < dropdownItems.length; i++) {
      const item = dropdownItems[i];
      if (
        item.innerText.toLowerCase() === event.target.textContent.toLowerCase()
      ) {
        item.style.display = "block";
        break;
      }
    }
  }
});
