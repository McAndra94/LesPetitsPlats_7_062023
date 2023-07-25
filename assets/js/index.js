const totalRecipeElement = document.querySelector(".totalRecipes");
const recipesSection = document.querySelector(".recipesSection");

function displayRecipes(recipes) {
  recipesSection.innerHTML = "";
  console.log("displayRecipes check", recipes);

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    // Creates div for each recipe
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipeCard");

    const recipeLink = document.createElement("a");
    recipeLink.href = "#";

    const recipeImage = document.createElement("img");
    recipeImage.classList.add("recipeImage");
    recipeImage.src = "./assets/images/recettes/" + recipe.image;
    recipeImage.alt = recipe.name;

    const recipeTime = document.createElement("p");
    recipeTime.classList.add("recipeTime");
    recipeTime.textContent = recipe.time + "min";

    const recipeName = document.createElement("h2");
    recipeName.classList.add("recipeName");
    recipeName.textContent = recipe.name;

    const recipeBody = document.createElement("div");
    recipeBody.classList.add("recipeBody");

    const recipeSection = document.createElement("div");
    recipeSection.classList.add("recettesSection");

    const recipeTitle = document.createElement("h3");
    recipeTitle.classList.add("recipeTitle");
    recipeTitle.textContent = "recette";

    const recipeDescription = document.createElement("p");
    recipeDescription.classList.add("recipeDescription");
    recipeDescription.textContent = recipe.description;

    const ingredientsSection = document.createElement("div");
    ingredientsSection.classList.add("ingredientsSection");

    const ingredientsTitle = document.createElement("h3");
    ingredientsTitle.classList.add("recipeTitle");
    ingredientsTitle.textContent = "ingrédients";

    const ingredientsTable = document.createElement("table");
    ingredientsTable.classList.add("ingredientsTable");

    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      const ingredientRow = document.createElement("tr");
      const ingredientNameCell = document.createElement("td");
      ingredientNameCell.classList.add("ingredientNameCell");
      ingredientNameCell.textContent = ingredient.ingredient;
      ingredientRow.appendChild(ingredientNameCell);

      if (ingredient.quantity) {
        const lineBreakRow = document.createElement("tr");
        const quantityUnitCell = document.createElement("td");
        quantityUnitCell.classList.add("quantityUnitCell");

        if (ingredient.unit) {
          const quantityUnitText = `${ingredient.quantity} ${ingredient.unit}`;
          quantityUnitCell.textContent = quantityUnitText;
        } else {
          quantityUnitCell.textContent = ingredient.quantity;
        }

        ingredientRow.appendChild(lineBreakRow);
        ingredientRow.appendChild(quantityUnitCell);
      }

      ingredientsTable.appendChild(ingredientRow);
    }

    // Create elements for appliance and utensils
    if (recipe.appliance) {
      const recipeAppliance = document.createElement("div");
      recipeAppliance.classList.add("recipeAppliance");
      recipeAppliance.textContent = recipe.appliance;

      // Append the HTML elements to the recipe card
      recipeSection.appendChild(recipeTitle);
      recipeSection.appendChild(recipeDescription);
      recipeSection.appendChild(recipeAppliance);
    } else {
      recipeSection.appendChild(recipeTitle);
      recipeSection.appendChild(recipeDescription);
    }

    // Create element for utensils if available
    if (recipe.ustensils && recipe.ustensils.length > 0) {
      const recipeUtensil = document.createElement("div");
      recipeUtensil.classList.add("recipeUtensil");
      recipeUtensil.textContent = recipe.ustensils.join(", ");

      recipeSection.appendChild(recipeUtensil);
    }
    ingredientsSection.appendChild(ingredientsTitle);
    ingredientsSection.appendChild(ingredientsTable);

    recipeBody.appendChild(recipeSection);
    recipeBody.appendChild(ingredientsSection);

    recipeLink.appendChild(recipeImage);
    recipeLink.appendChild(recipeTime);
    recipeLink.appendChild(recipeName);
    recipeLink.appendChild(recipeBody);

    recipeCard.appendChild(recipeLink);

    recipesSection.appendChild(recipeCard);
  }

  // Set the text content for total number of recipes
  totalRecipeElement.textContent = recipes.length + " recettes";
}

const dropdownToggleButtons = document.querySelectorAll(".dropdown-toggle");
for (let i = 0; i < dropdownToggleButtons.length; i++) {
  const button = dropdownToggleButtons[i];
  button.addEventListener("click", function () {
    const dropdownMenu = button.nextElementSibling;

    // Check if dropdownMenu contains .show (if not: hidden, if yes: visible)
    if (dropdownMenu.classList.contains("show") == false) {
      const buttons = document.querySelectorAll(".dropdown-toggle");

      for (let j = 0; j < buttons.length; j++) {
        // Remove .show from next sibling of each .dropdown-toggle
        buttons[j].nextElementSibling.classList.remove("show");
        // Set aria-expanded to false, informs the toggle is closed
        buttons[j].setAttribute("aria-expanded", false);
      }
    }

    dropdownMenu.classList.toggle("show");
    // If .show, aria-expanded informs the toggle is expanded
    button.setAttribute(
      "aria-expanded",
      dropdownMenu.classList.contains("show")
    );
  });
}

window.onload = function () {
  // Call the function to display the recipes
  displayRecipes(recipes);
  populateDropdowns(recipes);
  filterIngredients(searchResults);
  filterAppliances(searchResults);
  filterUtensils(searchResults);
  attachEventListeners();
};
