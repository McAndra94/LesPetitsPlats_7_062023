const allTagsBox = document.querySelector(".allTags");

// 1. Ingredient section
const ingredientDropdownItems = document.getElementById(
  "ingredientDropdownItems"
);
const ingredientTagsBox = document.getElementById("ingredientTagsBox");
ingredientSearchInput.addEventListener("input", searchIngredients);

function searchIngredients() {
  const searchText = ingredientSearchInput.value.toLowerCase();
  let cards = 0;

  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const ingredientNameCells = recipeCard.querySelectorAll(
      ".ingredientNameCell"
    );
    let searchMatch = false;

    // Check if any ingredient name matches the search text
    for (let j = 0; j < ingredientNameCells.length; j++) {
      const ingredientName = ingredientNameCells[j].textContent.toLowerCase();
      if (ingredientName.includes(searchText)) {
        searchMatch = true;
        break;
      }
    }

    // Show/hide the recipe card based on search match
    if (searchMatch) {
      recipeCard.style.display = "block";
      cards++;
    } else {
      recipeCard.style.display = "none";
    }
  }

  // Update the total n° of recipes
  totalRecipeElement.textContent = cards + " recettes";
  displayFilteredRecipes();
}

// Remove tag from the tags box div and show it back on the dropdown list
ingredientTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    // Show the tag's ingredientList in the dropdown
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

    event.target.remove(); // Remove tag from ingredientTagsBox

    // Remove tag from allTagsBox
    // "event.target.textContent" = targeted tag contents
    removeTagFromAllTagsBox(event.target.textContent);
    /*   const allTags = allTagsBox.getElementsByClassName("tag");
    for (let i = 0; i < allTags.length; i++) {
      const tag = allTags[i];
      if (tag.textContent.toLowerCase() === tagText) {
        tag.remove();
        break;
      }
    } */

    searchIngredients();
  }
  displayFilteredRecipes();
});

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

    const closeTags = document.createElement("span");
    closeTags.classList.add("close", "fas", "fa-times");
    // closeTags.innerHTML = "&times;";
    closeTags.addEventListener("click", () => {
      allTagsTag.remove(); // Remove tag from allTagsBox
      tag.remove(); // Remove tag from ingredientTagsBox in dropdown

      // Add tag back to ingredientList in dropdown
      const dropdownItems =
        ingredientDropdownItems.getElementsByClassName("ingredientList");
      for (let i = 0; i < dropdownItems.length; i++) {
        const item = dropdownItems[i];
        if (
          item.innerText.toLowerCase() === allTagsTag.textContent.toLowerCase()
        ) {
          item.style.display = "block";
          break;
        }
      }
    });

    allTagsTag.appendChild(closeTags);
    allTagsBox.appendChild(allTagsTag);
  }

  // Hide the ingredientList in the dropdown list
  const dropdownItems =
    ingredientDropdownItems.getElementsByClassName("ingredientList");
  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    if (
      item.textContent.toLowerCase() === event.target.textContent.toLowerCase()
    ) {
      item.style.display = "none";

      break;
    }
    console.log(event.target.textContent);
  }
  searchIngredients();
}

// 2. Appliance section
const applianceDropdownItems = document.getElementById(
  "applianceDropdownItems"
);
const applianceTagsBox = document.getElementById("applianceTagsBox");
applianceSearchInput.addEventListener("input", searchAppliances);

function searchAppliances() {
  const searchText = applianceSearchInput.value.toLowerCase();
  let cards = 0;

  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const applianceList = recipeCard.querySelectorAll(".applianceList");
    let searchMatch = false;

    // Check if any appliance matches the search text
    for (let j = 0; j < applianceList.length; j++) {
      const applianceName = applianceList[j].textContent.toLowerCase();
      if (applianceName.includes(searchText)) {
        searchMatch = true;
        break;
      }
    }

    // Show/hide the recipe card based on search match
    if (searchMatch) {
      recipeCard.style.display = "block";
      cards++;
    } else {
      recipeCard.style.display = "none";
    }
  }

  // Update the total number of recipes
  totalRecipeElement.textContent = cards + " recettes";
  displayFilteredRecipes();
}

// Remove tag from the applianceTagsBox div and show it back on the dropdown list
applianceTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    // Show the tag's applianceList in the dropdown
    const dropdownItems =
      applianceDropdownItems.getElementsByClassName("applianceList");
    for (let i = 0; i < dropdownItems.length; i++) {
      const item = dropdownItems[i];
      if (
        item.innerText.toLowerCase() === event.target.textContent.toLowerCase()
      ) {
        item.style.display = "block";
        break;
      }
    }

    event.target.remove(); // Remove tag from applianceTagsBox
    removeTagFromAllTagsBox(event.target.textContent);

    /*     // Remove tag from allTagsBox
    const allTags = allTagsBox.getElementsByClassName("tag");
    for (let i = 0; i < allTags.length; i++) {
      const tag = allTags[i];
      if (tag.textContent.toLowerCase() === tagText) {
        tag.remove();
        break;
      }
    } */
    searchAppliances();
  }
  displayFilteredRecipes();
});

// See filter.js
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

    const closeTags = document.createElement("span");
    closeTags.classList.add("close", "fas", "fa-times");
    closeTags.addEventListener("click", () => {
      allTagsTag.remove();
      tag.remove();

      // Add tag back to applianceList in dropdown
      const dropdownItems =
        ingredientDropdownItems.getElementsByClassName("applianceList");
      for (let i = 0; i < dropdownItems.length; i++) {
        const item = dropdownItems[i];
        if (
          item.innerText.toLowerCase() === allTagsTag.textContent.toLowerCase()
        ) {
          item.style.display = "block";
          break;
        }
      }
    });

    allTagsTag.appendChild(closeTags);
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
  searchAppliances();
}

// 3. Utensil section
const utensilDropdownItems = document.getElementById("utensilDropdownItems");
const utensilTagsBox = document.getElementById("utensilTagsBox");
utensilSearchInput.addEventListener("input", searchUtensils);

function searchUtensils() {
  const searchText = utensilSearchInput.value.toLowerCase();
  let cards = 0;

  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const utensilList = recipeCard.querySelectorAll(".utensilList");
    let searchMatch = false;

    // Check if any utensil matches the search text
    for (let j = 0; j < utensilList.length; j++) {
      const utensilName = utensilList[j].textContent.toLowerCase();
      if (utensilName.includes(searchText)) {
        searchMatch = true;
        break;
      }
    }
    // Show/hide the recipe card based on search and tag matches
    if (searchMatch) {
      recipeCard.style.display = "block";
      cards++;
    } else {
      recipeCard.style.display = "none";
    }
  }

  // Update the total number of recipes
  totalRecipeElement.textContent = cards + " recettes";
  displayFilteredRecipes();
}

// Remove tag from the tags box div and show it back on the dropdown list
utensilTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    // Show the tag's utensilList in the dropdown
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

    event.target.remove();

    // Remove tag from allTagsBox
    const allTags = allTagsBox.getElementsByClassName("tag");
    for (let i = 0; i < allTags.length; i++) {
      const tag = allTags[i];
      if (
        tag.textContent.toLowerCase() === event.target.textContent.toLowerCase()
      ) {
        tag.remove();
        break;
      }
    }
    searchUtensils();
  }
  displayFilteredRecipes();
});

// See filter.js
function addUtensilTag(utensil) {
  console.log("Utensil tag check:", utensil);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = utensil;
  // Append tag to the utensilTagsBox div
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

    const closeTags = document.createElement("span");
    closeTags.classList.add("close", "fas", "fa-times");
    closeTags.addEventListener("click", () => {
      allTagsTag.remove();
      tag.remove();

      // Add tag back to utensilList in dropdown
      const dropdownItems =
        ingredientDropdownItems.getElementsByClassName("utensilList");
      for (let i = 0; i < dropdownItems.length; i++) {
        const item = dropdownItems[i];
        if (
          item.innerText.toLowerCase() === allTagsTag.textContent.toLowerCase()
        ) {
          item.style.display = "block";
          break;
        }
      }
    });

    allTagsTag.appendChild(closeTags);
    allTagsBox.appendChild(allTagsTag);
  }

  // Hide the utensilList in the dropdown list
  const dropdownItems =
    utensilDropdownItems.getElementsByClassName("utensilList");
  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    if (item.textContent.toLowerCase() === utensil.toLowerCase()) {
      item.style.display = "none";
      break;
    }
  }
  searchUtensils();
}

allTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    const tagElement = event.target.parentElement;
    const tagText = tagElement.textContent;

    // Show the tag's ingredientList/applianceList/utensilList in the dropdown
    const ingredientDropdownList =
      ingredientDropdownItems.getElementsByClassName("ingredientList");
    const applianceDropdownList =
      applianceDropdownItems.getElementsByClassName("applianceList");
    const utensilDropdownList =
      utensilDropdownItems.getElementsByClassName("utensilList");

    for (let i = 0; i < ingredientDropdownList.length; i++) {
      const item = ingredientDropdownList[i];
      if (item.innerText.toLowerCase() === tagText.toLowerCase()) {
        item.style.display = "block";
        break;
      }
    }

    for (let i = 0; i < applianceDropdownList.length; i++) {
      const item = applianceDropdownList[i];
      if (item.innerText.toLowerCase() === tagText.toLowerCase()) {
        item.style.display = "block";
        break;
      }
    }

    for (let i = 0; i < utensilDropdownList.length; i++) {
      const item = utensilDropdownList[i];
      if (item.innerText.toLowerCase() === tagText.toLowerCase()) {
        item.style.display = "block";
        break;
      }
    }

    // Remove tag from ingredientTagsBox
    const ingredientTags = ingredientTagsBox.getElementsByClassName("tag");
    for (let i = 0; i < ingredientTags.length; i++) {
      const tag = ingredientTags[i];
      if (tag.textContent === tagText) {
        tag.remove();
        break;
      }
    }

    // Remove tag from applianceTagsBox
    const applianceTags = applianceTagsBox.getElementsByClassName("tag");
    for (let i = 0; i < applianceTags.length; i++) {
      const tag = applianceTags[i];
      if (tag.textContent === tagText) {
        tag.remove();
        break;
      }
    }

    // Remove tag from utensilTagsBox
    const utensilTags = utensilTagsBox.getElementsByClassName("tag");
    for (let i = 0; i < utensilTags.length; i++) {
      const tag = utensilTags[i];
      if (tag.textContent === tagText) {
        tag.remove();
        break;
      }
    }

    // Remove tag from allTagsBox
    tagElement.remove();

    // Create a new ingredientList/applianceList/utensilList
    const newIngredientListItem = document.createElement("a");
    newIngredientListItem.classList.add("ingredientList");
    newIngredientListItem.textContent = tagText;

    const newApplianceListItem = document.createElement("a");
    newApplianceListItem.classList.add("applianceList");
    newApplianceListItem.textContent = tagText;

    const newUtensilListItem = document.createElement("a");
    newUtensilListItem.classList.add("utensilList");
    newUtensilListItem.textContent = tagText;

    // Add click to new ingredientList <a>
    newIngredientListItem.addEventListener("click", () => {
      addIngredientTag(tagText);
    });

    // Add click to new applianceList <a>
    newApplianceListItem.addEventListener("click", () => {
      addApplianceTag(tagText);
    });

    // Add click to new utensilList <a>
    newUtensilListItem.addEventListener("click", () => {
      addUtensilTag(tagText);
    });

    // Append the new ingredientList to the ingredientDropdownItems
    ingredientDropdownItems.appendChild(newIngredientListItem);

    // Append the new applianceList to the applianceDropdownItems
    applianceDropdownItems.appendChild(newApplianceListItem);

    // Append the new utensilList to the utensilDropdownItems
    utensilDropdownItems.appendChild(newUtensilListItem);

    // Update the filtered recipes
    searchIngredients();
    searchAppliances();
    searchUtensils();
  }
  displayFilteredRecipes();
});

// Function for removing tags from allTagsBox (.allTags))
function removeTagFromAllTagsBox(tagText) {
  const existingTags = allTagsBox.getElementsByClassName("tag");
  for (let i = 0; i < existingTags.length; i++) {
    const tag = existingTags[i];
    if (tag.textContent.toLowerCase() === tagText.toLowerCase()) {
      tag.remove();
      break;
    }
  }

  const existingIngredientTags =
    ingredientTagsBox.getElementsByClassName("tag");
  for (let i = 0; i < existingIngredientTags.length; i++) {
    const tag = existingIngredientTags[i];
    if (tag.textContent.toLowerCase() === tagText.toLowerCase()) {
      tag.remove();
      break;
    }
  }

  const existingApplianceTags = applianceTagsBox.getElementsByClassName("tag");
  for (let i = 0; i < existingApplianceTags.length; i++) {
    const tag = existingApplianceTags[i];
    if (tag.textContent.toLowerCase() === tagText.toLowerCase()) {
      tag.remove();
      break;
    }
  }

  const existingUtensilTags = utensilTagsBox.getElementsByClassName("tag");
  for (let i = 0; i < existingUtensilTags.length; i++) {
    const tag = existingUtensilTags[i];
    if (tag.textContent.toLowerCase() === tagText.toLowerCase()) {
      tag.remove();
      break;
    }
  }
}
