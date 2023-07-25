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
