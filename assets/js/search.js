const searchInput = document.getElementById("searchInput");
const recipeCards = recipesSection.getElementsByClassName("recipeCard");
const noMatchMsg = document.createElement("p");
noMatchMsg.classList.add("noMatchMsg");
let searchResults = [];

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  // Search launches at 3 or more input
  if (searchText.length >= 3) {
    searchRecipes();
  }
  // Reset recipes back to initial when empty
  else if (searchText === "") {
    displayRecipes(recipes);
  }
});

function searchRecipes() {
  const searchText = searchInput.value.toLowerCase();
  let cards = 0;
  searchResults = [];
  // Store the filtered recipe card into the 'searchResults' array
  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const recipeName = recipeCard.querySelector(".recipeName");
    const recipeDescription = recipeCard.querySelector(".recipeDescription");
    const ingredientNameCells = recipeCard.querySelectorAll(
      ".ingredientNameCell"
    );
    let searchMatch = false;

    if (
      searchText === "" ||
      recipeName.textContent.toLowerCase().includes(searchText) ||
      recipeDescription.textContent.toLowerCase().includes(searchText)
    ) {
      searchMatch = true;
    }

    // Check if any ingredient name matches the search text
    for (let j = 0; j < ingredientNameCells.length; j++) {
      const ingredientName = ingredientNameCells[j].textContent.toLowerCase();
      if (ingredientName.includes(searchText)) {
        searchMatch = true;
        break;
      }
    }

    // Show/hide the recipe card based on search and tag matches
    if (searchMatch) {
      recipeCard.style.display = "block";
      cards++;
      searchResults.push(recipeCard); // Store the filtered recipe card
    } else {
      recipeCard.style.display = "none";
    }
  }

  // Update the total number of recipes
  totalRecipeElement.textContent = cards + " recettes";

  // If result > 0, display it. If not, show noMatchMsg
  if (cards === 0) {
    noMatchMsg.textContent = `Aucune recette ne contient ${searchText} vous pouvez chercher
  "tarte aux pommes", "poisson", etc.`;
    recipesSection.appendChild(noMatchMsg);
    // Update the total number of recipes to 0
    totalRecipeElement.textContent = "0 recette";
  } else {
    // If there were no matches, remove the noMatchMsg from the DOM
    if (noMatchMsg.parentNode === recipesSection) {
      recipesSection.removeChild(noMatchMsg);
    }
  }
  return searchResults;
}
