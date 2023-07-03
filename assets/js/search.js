const searchInput = document.getElementById("searchInput");
const recipeCards = recipesSection.getElementsByClassName("recipeCard");

searchInput.addEventListener("input", filterRecipes);

function filterRecipes() {
  const searchText = searchInput.value.toLowerCase();
  let cards = 0;
  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const elements = recipeCard.getElementsByTagName("*");
    let searchMatch = false;

    for (let j = 0; j < elements.length; j++) {
      const element = elements[j];
      const textContent = element.textContent.toLowerCase();

      if (textContent.includes(searchText)) {
        searchMatch = true;
        break;
      }
    }

    if (searchMatch) {
      recipeCard.style.display = "block";
      cards++; // +1 on each recipe that matches the search
    } else {
      recipeCard.style.display = "none";
    }
  }
  // Set the text content for total number of recipes
  totalRecipeElement.textContent = cards + " recettes";
}

// Display all recipes that match the search input
displayRecipes();
