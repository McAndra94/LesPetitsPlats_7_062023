// 1. Ingredient filter functionality
const ingredientSearchInput = document.getElementById("ingredientSearchInput");
const ingredientItems = document.getElementById("ingredientDropdownItems");

ingredientSearchInput.addEventListener("input", function () {
  console.log("Ingredient input event");
  filterIngredients(searchResults);
  searchIngredients();
});

function filterIngredients() {
  console.log(searchResults.length);

  const inputText = ingredientSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterIngredients check`);

  const ingredientList =
    ingredientItems.getElementsByClassName("ingredientList");

  for (let i = 0; i < ingredientList.length; i++) {
    const item = ingredientList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// 2. Appliance filter functionality
const applianceSearchInput = document.getElementById("applianceSearchInput");
const applianceItems = document.getElementById("applianceDropdownItems");

applianceSearchInput.addEventListener("input", function () {
  console.log("Appliance input event");
  filterAppliances(recipes);
  searchAppliances();
});

function filterAppliances() {
  const inputText = applianceSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterAppliances check`);

  const applianceList = applianceItems.getElementsByClassName("applianceList");

  for (let i = 0; i < applianceList.length; i++) {
    const item = applianceList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  console.log("Appliance filter complete");
}

// 3. Utensil filter functionality
const utensilSearchInput = document.getElementById("utensilSearchInput");
const utensilItems = document.getElementById("utensilDropdownItems");

utensilSearchInput.addEventListener("input", function () {
  console.log("Utensil input event");
  filterUtensils(recipes);
  searchUtensils();
});

function filterUtensils() {
  const inputText = utensilSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterUtensils check`);

  const utensilList = utensilItems.getElementsByClassName("utensilList");

  for (let i = 0; i < utensilList.length; i++) {
    const item = utensilList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  console.log("Utensil filter complete");
}

searchRecipes();

// Add eventListeners to the the dropdown items
function attachEventListeners() {
  // 1. Ingredient section
  const ingredientDropdown = document.getElementById("ingredientDropdownItems");
  const ingreDropdownItems =
    ingredientDropdown.getElementsByClassName("ingredientList");

  for (let i = 0; i < ingreDropdownItems.length; i++) {
    const item = ingreDropdownItems[i];
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      addIngredientTag(item.textContent.toLowerCase(), ingredientTagsBox);
      displayFilteredRecipes();
    });
  }

  // 2. Appliance section
  const applianceDropdown = document.getElementById("applianceDropdownItems");
  const appliDropdownItems =
    applianceDropdown.getElementsByClassName("applianceList");

  for (let i = 0; i < appliDropdownItems.length; i++) {
    const item = appliDropdownItems[i];
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      addApplianceTag(item.textContent.toLowerCase(), applianceTagsBox);
      displayFilteredRecipes();
    });
  }

  // 3. Utensil section
  const utensilDropdown = document.getElementById("utensilDropdownItems");
  const utensilDropdownItems =
    utensilDropdown.getElementsByClassName("utensilList");

  for (let i = 0; i < utensilDropdownItems.length; i++) {
    const item = utensilDropdownItems[i];
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      addUtensilTag(item.textContent.toLowerCase(), utensilTagsBox);
      displayFilteredRecipes();
    });
  }
}

// Function to display filtered recipes
function displayFilteredRecipes() {
  console.log("displayFilteredRecipes check");
  const ingredientTags = ingredientTagsBox.getElementsByClassName("tag");
  const applianceTags = applianceTagsBox.getElementsByClassName("tag");
  const utensilTags = utensilTagsBox.getElementsByClassName("tag");

  const searchResults = [];

  for (let i = 0; i < recipes.length; i++) {
    console.log(recipes[i]);
    const recipe = recipes[i];
    let hasMatchingTags = true;

    // Check if any of the ingredient tags match the recipe
    for (let j = 0; j < ingredientTags.length; j++) {
      const ingredientTag = ingredientTags[j];
      let ingredientMatch = false;

      const recipeIngredients = recipe.ingredients;
      for (let k = 0; k < recipeIngredients.length; k++) {
        const recipeIngredient = recipeIngredients[k].ingredient;
        if (
          recipeIngredient
            .toLowerCase()
            .includes(ingredientTag.textContent.toLowerCase())
        ) {
          ingredientMatch = true;
          break;
        }
      }

      if (!ingredientMatch) {
        hasMatchingTags = false;
        break;
      }
    }

    // Check if any of the appliance tags match the recipe
    if (hasMatchingTags && applianceTags.length > 0) {
      let applianceMatch = false;

      if (recipe.appliance) {
        applianceMatch = true; // Checks if recipe has an array named appliance
        for (let j = 0; j < applianceTags.length; j++) {
          const applianceTag = applianceTags[j];
          if (
            !recipe.appliance
              .toLowerCase()
              .includes(applianceTag.textContent.toLowerCase())
          ) {
            applianceMatch = false; // If any tag doesn't match, set to false
            break;
          }
        }
      }

      if (!applianceMatch) {
        hasMatchingTags = false;
      }
    }

    // Check if any of the utensil tags match the recipe
    if (hasMatchingTags && utensilTags.length > 0) {
      let utensilMatch = false;

      if (recipe.ustensils) {
        utensilMatch = true; // Checks if recipe has an array named ustensils
        for (let j = 0; j < utensilTags.length; j++) {
          const utensilTag = utensilTags[j];
          let hasTagMatch = false;
          for (let k = 0; k < recipe.ustensils.length; k++) {
            const recipeUtensil = recipe.ustensils[k].toLowerCase();
            if (recipeUtensil.includes(utensilTag.textContent.toLowerCase())) {
              hasTagMatch = true;
              break;
            }
          }
          if (!hasTagMatch) {
            utensilMatch = false; // If no match, set to false
            break;
          }
        }
      }

      if (!utensilMatch) {
        hasMatchingTags = false;
      }
    }

    if (hasMatchingTags) {
      searchResults.push(recipe);
    }
  }

  // Empty recipesSection before adding searchResults
  recipesSection.innerHTML = "";

  // If result > 0, display it. If not, show noMatchMsg
  if (searchResults.length > 0) {
    displayRecipes(searchResults);
  } else {
    const searchedTags = []; // Storage
    for (let i = 0; i < ingredientTags.length; i++) {
      searchedTags.push(ingredientTags[i].textContent);
    }
    for (let i = 0; i < applianceTags.length; i++) {
      searchedTags.push(applianceTags[i].textContent);
    }
    for (let i = 0; i < utensilTags.length; i++) {
      searchedTags.push(utensilTags[i].textContent);
    }

    noMatchMsg.textContent = `Aucune recette ne contient ${searchedTags} vous pouvez chercher
    "tarte aux pommes", "poisson", etc.`;
    recipesSection.appendChild(noMatchMsg);
    // Update the total number of recipes to 0
    totalRecipeElement.textContent = "0 recette";
  }
}
