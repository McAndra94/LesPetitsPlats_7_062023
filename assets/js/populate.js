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
    });
  }
}

window.onload = function () {
  // Call the function to display the recipes
  displayRecipes(recipes);
  // populateIngredientDropdown(recipes);
  // populateApplianceDropdown(recipes);
  // populateUtensilDropdown(recipes);
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
  // Get the tags from all tags box
  const tags = allTagsBox.querySelectorAll(".tag");

  const filteredRecipes = [];

  // Iterate over the recipes
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    let hasMatchingTag = false;

    // Check if any of the tags match the recipe
    for (let j = 0; j < tags.length; j++) {
      const tag = tags[j];
      if (tag.textContent.toLowerCase() === recipe.toLowerCase()) {
        hasMatchingTag = true;
        break;
      }
    }

    // If a matching tag is found, add recipe
    if (hasMatchingTag) {
      filteredRecipes.push(recipe);
    }
  }

  // Display the filtered recipes
  displayRecipes(filteredRecipes);
}
