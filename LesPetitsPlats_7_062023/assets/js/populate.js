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

window.onload = function () {
  // Call the function to display the recipes
  displayRecipes(recipes);
  populateDropdowns(recipes);
  filterIngredients(recipes);
  filterAppliances(recipes);
  filterUtensils(recipes);
  attachEventListeners();
  displayFilteredRecipes();
};

function populateDropdowns(recipes) {
  console.log("populateDropdowns check");
  const ingredientDropdown = document.getElementById("ingredientDropdownItems");
  const applianceDropdown = document.getElementById("applianceDropdownItems");
  const utensilDropdown = document.getElementById("utensilDropdownItems");

  const ingredients = [];
  const appliances = [];
  const utensils = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j].ingredient;
      if (!ingredients.includes(ingredient)) {
        ingredients.push(ingredient);
      }
    }

    const appliance = recipe.appliance;
    if (!appliances.includes(appliance)) {
      appliances.push(appliance);
    }

    if (recipe.ustensils) {
      for (let j = 0; j < recipe.ustensils.length; j++) {
        const utensil = recipe.ustensils[j];

        if (!utensils.includes(utensil)) {
          utensils.push(utensil);
        }
      }
    }
  }

  populateIngredientDropdown(ingredientDropdown, ingredients);
  populateApplianceDropdown(applianceDropdown, appliances);
  populateUtensilDropdown(utensilDropdown, utensils);
}

function populateIngredientDropdown(dropdown, options) {
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("a");
    option.classList.add("ingredientList");
    option.textContent = options[i];
    dropdown.appendChild(option);
  }
}

function populateApplianceDropdown(dropdown, options) {
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("a");
    option.classList.add("applianceList");
    option.textContent = options[i];
    dropdown.appendChild(option);
  }
}

function populateUtensilDropdown(dropdown, options) {
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("a");
    option.classList.add("utensilList");
    option.textContent = options[i];
    dropdown.appendChild(option);
  }
}

// Function to display filtered recipes
function displayFilteredRecipes() {
  console.log("displayFilteredRecipes check");
  const ingredientTags = ingredientTagsBox.getElementsByClassName("tag");
  const applianceTags = applianceTagsBox.getElementsByClassName("tag");
  const utensilTags = utensilTagsBox.getElementsByClassName("tag");

  const filteredRecipes = [];

  for (let i = 0; i < recipes.length; i++) {
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

      if (
        recipe.appliance &&
        applianceTags[0].textContent.toLowerCase() ===
          recipe.appliance.toLowerCase()
      ) {
        applianceMatch = true;
      }

      if (!applianceMatch) {
        hasMatchingTags = false;
      }
    }

    // Check if any of the utensil tags match the recipe
    if (hasMatchingTags && utensilTags.length > 0) {
      let utensilMatch = false;

      if (recipe.ustensils) {
        for (let j = 0; j < utensilTags.length; j++) {
          const utensilTag = utensilTags[j];
          for (let k = 0; k < recipe.ustensils.length; k++) {
            const recipeUtensil = recipe.ustensils[k];
            if (
              recipeUtensil
                .toLowerCase()
                .includes(utensilTag.textContent.toLowerCase())
            ) {
              utensilMatch = true;
              break;
            }
          }
        }
      }

      if (!utensilMatch) {
        hasMatchingTags = false;
      }
    }

    if (hasMatchingTags) {
      filteredRecipes.push(recipe);
    }
  }

  displayRecipes(filteredRecipes);
}
