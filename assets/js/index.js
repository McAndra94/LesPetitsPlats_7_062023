// Import the recipes data
import recipes from "/assets/recipes.js";

const totalRecipeElement = document.querySelector(".totalRecipes");

function displayRecipes() {
  const recipesSection = document.querySelector(".recipesSection");

  recipesSection.innerHTML = "";

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    // Creates div for each recipe
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipeCard");

    // Toggle ingredients section
    recipeCard.addEventListener("click", function () {
      const ingredientsSort = this.querySelector(".sortBox");
      ingredientsSort.classList.toggle("show");
    });

    const recipeLink = document.createElement("a");
    recipeLink.href = "#";

    const recipeImage = document.createElement("img");
    recipeImage.classList.add("recipeImage");
    recipeImage.src = "/assets/images/recettes/" + recipe.image;
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

    // Append the HTML elements to the recipe card
    recipeSection.appendChild(recipeTitle);
    recipeSection.appendChild(recipeDescription);

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

  // Call the function to populate dropdown menus
  // populateDropdowns();
}

// Call the function to display the recipes
displayRecipes(recipes);
