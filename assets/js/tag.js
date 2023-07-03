const allTagsBox = document.querySelector(".allTags");

// 1. Ingredient section
const ingredientDropdownItems = document.getElementById(
  "ingredientDropdownItems"
);
const ingredientTagsBox = document.getElementById("ingredientTagsBox");

ingredientDropdownItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("ingredientList")) {
    const selectedIngredient = event.target.innerText;
    addIngredientTag(selectedIngredient);
    // Remove selectedIngredient from ingredientList
    event.target.remove(); // not working !?!
    ingredientSearchInput.value = "";
  }
});

function addIngredientTag(ingredient) {
  console.log("Tag check:", ingredient);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = ingredient;
  // Add tag to the ingredientTagsBox div
  ingredientTagsBox.appendChild(tag);

  // Add tag to the allTags div
  const allTags = allTagsBox.querySelectorAll(".tag");
  const existingTags = Array.from(allTags).map((tag) => tag.textContent);
  if (!existingTags.includes(ingredient)) {
    const allTagsTag = document.createElement("span");
    allTagsTag.classList.add("tag");
    allTagsTag.textContent = ingredient;
    allTagsBox.appendChild(allTagsTag);
  }
}

// Remove tag from the ingredientTagsBox div
ingredientTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});

// 2. Appliance section
const applianceDropdownItems = document.getElementById(
  "applianceDropdownItems"
);
const applianceTagsBox = document.getElementById("applianceTagsBox");

applianceDropdownItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("applianceList")) {
    const selectedAppliance = event.target.innerText;
    addApplianceTag(selectedAppliance);
    applianceSearchInput.value = "";
  }
});

function addApplianceTag(appliance) {
  console.log("Tag check:", appliance);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = appliance;

  // Append the tag to the applianceTagsBox div
  applianceTagsBox.appendChild(tag);
  // Add tag to the allTags div
  const allTags = allTagsBox.querySelectorAll(".tag");
  const existingTags = Array.from(allTags).map((tag) => tag.textContent);
  if (!existingTags.includes(appliance)) {
    const allTagsTag = document.createElement("span");
    allTagsTag.classList.add("tag");
    allTagsTag.textContent = appliance;
    allTagsBox.appendChild(allTagsTag);
  }
}

// Remove tag from the applianceTagsBox div
applianceTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});

// 3. Utensil section
const utensilDropdownItems = document.getElementById("utensilDropdownItems");
const utensilTagsBox = document.getElementById("utensilTagsBox");

utensilDropdownItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("utensilList")) {
    const selectedUtensil = event.target.innerText;
    addUtensilTag(selectedUtensil);
    utensilSearchInput.value = "";
  }
});

function addUtensilTag(utensil) {
  console.log("Tag check:", utensil);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = utensil;

  // Append the tag to the utensilTagsBox div
  utensilTagsBox.appendChild(tag);

  // Add tag to the allTags div
  const allTags = allTagsBox.querySelectorAll(".tag");
  const existingTags = Array.from(allTags).map((tag) => tag.textContent);
  if (!existingTags.includes(utensil)) {
    const allTagsTag = document.createElement("span");
    allTagsTag.classList.add("tag");
    allTagsTag.textContent = utensil;
    allTagsBox.appendChild(allTagsTag);
  }
}

// Remove tag from the utensilTagsBox div
utensilTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});
