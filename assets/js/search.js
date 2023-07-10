const searchInput = document.getElementById("searchInput");
const recipeCards = recipesSection.getElementsByClassName("recipeCard");

searchInput.addEventListener("input", searchRecipes);

function searchRecipes() {
  const searchText = searchInput.value.toLowerCase();
  /* const ingredientTags = ingredientTagsBox.querySelectorAll(
    "#ingredientTagsBox .tag"
  );
  const applianceTags = applianceTagsBox.querySelectorAll(
    "#applianceTagsBox .tag"
  );
  const utensilTags = utensilTagsBox.querySelectorAll("#utensilTagsBox .tag"); */
  const allTags = document.querySelectorAll(".allTags .tag");
  let cards = 0;

  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const recipeText = recipeCard.textContent.toLowerCase();
    let searchMatch = false;
    let tagMatch = true;

    // Check if the recipe card matches the search text
    if (
      searchText === "" ||
      recipeCard.textContent.toLowerCase().includes(searchText)
    ) {
      searchMatch = true;
    }

    if (allTags.length > 0) {
      for (let j = 0; j < allTags.length; j++) {
        const tag = allTags[j];
        const tagName = tag.textContent.toLowerCase();

        // Check if the recipe card matches any of the tags
        if (recipeText.includes(tagName)) {
          tagMatch = true;
          break;
        }
      }
    } else {
      // If no tags selected, consider it as a match
      tagMatch = true;
    }

    // Show/hide the recipe card based on search and tag matches
    if (searchMatch && tagMatch) {
      recipeCard.style.display = "block";
      cards++;
    } else {
      recipeCard.style.display = "none";
    }
  }

  // Update the total number of recipes
  totalRecipeElement.textContent = cards + " recettes";
}
