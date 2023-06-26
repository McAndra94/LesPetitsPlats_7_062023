import recipes from "/assets/recipes.js";

function attachEventListeners() {
  // Adds eventListener to dropdownItems
  const ingredientDropdown = document.getElementById("ingredientDropdown");
  const dropdownItems = ingredientDropdown.querySelectorAll(".dropdown-item");

  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      addTag(item.textContent.toLowerCase());
    });
  }

  const dropdownMenu = ingredientDropdown.querySelector(".dropdown-menu");
  dropdownMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

window.onload = function () {
  const recipes = getRecipes();
  populateDropdowns(recipes);
  filterIngredients();
  attachEventListeners();
};

function getRecipes() {
  return recipes;
}

function populateDropdowns(recipes) {
  console.log("populateDropdowns check");
  const ingredientDropdown = document.getElementById("ingredientDropdown");
  const applianceDropdown = document.getElementById("applianceDropdown");
  const utensilsDropdown = document.getElementById("utensilsDropdown");

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

  populateDropdownOptions(ingredientDropdown, ingredients);
  populateDropdownOptions(applianceDropdown, appliances);
  populateDropdownOptions(utensilsDropdown, utensils);
}

function populateDropdownOptions(dropdown, options) {
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("a");
    option.classList.add("dropdown-item");
    option.textContent = options[i];
    dropdown.appendChild(option);
  }
}

// Ingredient search functionality
const ingredientSearchInput = document.getElementById("ingredientSearchInput");
const ingredientItems = document.querySelectorAll(
  "#ingredientDropdownItems .dropdown-item"
);

ingredientSearchInput.addEventListener("input", filterIngredients);

function filterIngredients() {
  const inputText = ingredientSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterIngredients check`);

  const dropdownItems = ingredientDropdown.querySelectorAll(".dropdown-item");

  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// Appliance search functionality
const applianceSearchInput = document.getElementById("applianceSearchInput");
const applianceItems = document.querySelectorAll(
  "#applianceDropdownItems .dropdown-item"
);

applianceSearchInput.addEventListener("input", filterAppliances);

function filterAppliances() {
  const inputText = applianceSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterAppliances check`);

  const dropdownItems = applianceDropdown.querySelectorAll(".dropdown-item");

  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// Utensils search functionality
const utensilsSearchInput = document.getElementById("utensilsSearchInput");
const utensilsItems = document.querySelectorAll(
  "#utensilsDropdownItems .dropdown-item"
);

utensilsSearchInput.addEventListener("input", filterUtensils);

function filterUtensils() {
  const inputText = utensilsSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterUtensils check`);

  const dropdownItems = utensilsDropdown.querySelectorAll(".dropdown-item");

  for (let i = 0; i < dropdownItems.length; i++) {
    const item = dropdownItems[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

attachTagEventListeners(
  "#ingredientDropdown",
  "#ingredientDropdownItems",
  "#ingredientSearchInput"
);
attachTagEventListeners(
  "#applianceDropdown",
  "#applianceDropdownItems",
  "#applianceSearchInput"
);
attachTagEventListeners(
  "#utensilsDropdown",
  "#utensilsDropdownItems",
  "#utensilsSearchInput"
);

function attachTagEventListeners(dropdownId, dropdownItemsId, searchInputId) {
  const dropdown = document.querySelector(dropdownId);
  const dropdownItems = dropdown.querySelector(dropdownItemsId);
  const searchInput = document.querySelector(searchInputId);

  dropdownItems.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-item")) {
      const selectedItem = event.target.innerText;
      addTag(selectedItem);
      searchInput.value = "";
    }
  });
}
