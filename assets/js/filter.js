// Add eventListeners to the the dropdown items
function attachEventListeners() {
  // 1. Ingredient section
  const ingredientDropdown = document.getElementById("ingredientDropdown");
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
  const applianceDropdown = document.getElementById("applianceDropdown");
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
  const utensilDropdown = document.getElementById("utensilDropdown");
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
  filterIngredients();
  filterAppliances();
  filterUtensils();
  attachEventListeners();
};

function populateDropdowns(recipes) {
  console.log("populateDropdowns check");
  const ingredientDropdown = document.getElementById("ingredientDropdown");
  const applianceDropdown = document.getElementById("applianceDropdown");
  const utensilDropdown = document.getElementById("utensilDropdown");

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

// 1. Ingredient search functionality
const ingredientSearchInput = document.getElementById("ingredientSearchInput");
const ingredientItems = document.getElementById("ingredientDropdownItems");

ingredientSearchInput.addEventListener("input", filterIngredients);

function filterIngredients() {
  const inputText = ingredientSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterIngredients check`);

  const ingredientList =
    ingredientDropdown.getElementsByClassName("ingredientList");

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

// 2. Appliance search functionality
const applianceSearchInput = document.getElementById("applianceSearchInput");
const applianceItems = document.getElementById("applianceDropdownItems");

applianceSearchInput.addEventListener("input", filterAppliances);

function filterAppliances() {
  const inputText = applianceSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterAppliances check`);

  const applianceList =
    applianceDropdown.getElementsByClassName("applianceList");

  for (let i = 0; i < applianceList.length; i++) {
    const item = applianceList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// 3. Utensil search functionality
const utensilSearchInput = document.getElementById("utensilSearchInput");
const utensilItems = document.getElementById("utensilDropdownItems");

utensilSearchInput.addEventListener("input", filterUtensils);

function filterUtensils() {
  const inputText = utensilSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterUtensils check`);

  const utensilList = utensilDropdown.getElementsByClassName("utensilList");

  for (let i = 0; i < utensilList.length; i++) {
    const item = utensilList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
