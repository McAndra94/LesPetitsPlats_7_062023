const searchInput = document.getElementById("searchInput");
const recipeCardsContainer =
	recipesSection.getElementsByClassName("recipeCard");
const noMatchMsg = document.createElement("p");
noMatchMsg.classList.add("noMatchMsg");

// Declare (to be used as search input text)
let searchText = "";
// Declare as array (to be used as search results array)
let searchResults = [];
// Use to check if main search done or not. Default: not done
let mainSearchDone = false;

// Main search input event
searchInput.addEventListener("input", function () {
	// Transform text to lowercase for comparation
	searchText = searchInput.value.toLowerCase();
	// Search launches at 3 input, if empty all recipes are displayed
	if (searchText.length >= 3) {
		// Clear existing recipes & tags before displaying results or noMatchMsg
		recipesSection.innerHTML = "";
		searchRecipes();
	}
	if (searchText === "") {
		searchRecipes();
	}
});

// Function that handles the main search
function searchRecipes() {
	let cards = 0; // Start at 0, for counting displayed n° recipes
	searchResults = []; // Empty 1st. To store results in an array

	// Clear previous recipe cards
	for (let i = 0; i < recipes.length; i++) {
		const recipe = recipes[i];
		const recipeName = recipe.name;
		const recipeDescription = recipe.description;
		const ingredientNameCells = recipe.ingredients.map((ing) => ing.ingredient);
		let searchMatch = false; // Declare and set default as false

		// Check if search text matches recipe name or description
		if (
			searchText === "" ||
			recipeName.toLowerCase().includes(searchText) ||
			recipeDescription.toLowerCase().includes(searchText)
		) {
			searchMatch = true; // Change to true if match is found
		}

		// Check if recipe ingredient matches the search text
		for (let j = 0; j < ingredientNameCells.length; j++) {
			const ingredientName = ingredientNameCells[j].toLowerCase();
			if (ingredientName.includes(searchText)) {
				searchMatch = true;
				break; // Stop the loop & move on
			}
		}

		// Show/hide the recipe card based on search matches
		if (searchMatch) {
			cards++; // +1 for each match found & update displayed n° recipes
			searchResults.push(recipe); // Store the recipe card found
		}
		// If searchResults > 0, set mainSearchDone to true
		if (searchResults.length > 0) {
			mainSearchDone = true;
		}
	}

	// Clear existing recipes & tags before displaying results or noMatchMsg
	recipesSection.innerHTML = "";

	// If cards is higher than 0, then search results found
	if (cards > 0) {
		// Update totalRecipeElement with total n° (cards) of recipes
		totalRecipeElement.textContent = cards + " recettes";
		// Display the search results
		displayRecipes(searchResults);
		// Update the dropdowns with the search results
		populateDropdowns(searchResults);
	}
	// If cards is 0, show no match message
	else if (cards === 0) {
		noMatchMsg.textContent = `Aucune recette ne contient "${searchText}" vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
		// Append noMatchMsg to recipesSection when no match
		recipesSection.appendChild(noMatchMsg);

		// Update totalRecipeElement (total number of recipes) to 0 recipe
		totalRecipeElement.textContent = "0 recette";
	} else {
		// Check if noMatchMsg is a child of recipesSection
		if (noMatchMsg.parentNode === recipesSection) {
			// If so, remove noMatchMsg (meaning there's a match)
			recipesSection.removeChild(noMatchMsg);
		}
	}
	console.log(searchResults);
	return searchResults;
}
