const recipeCards = document.querySelectorAll(".recipeCard");

// 1. Ingredient section
ingredientSearchInput.addEventListener("input", searchIngredients);

function searchIngredients() {
	const searchText = ingredientSearchInput.value.toLowerCase();
	let cards = 0;

	for (let i = 0; i < recipeCards.length; i++) {
		const recipeCard = recipeCards[i];
		const ingredientNameCells = recipeCard.querySelectorAll(
			".ingredientNameCell"
		);
		let searchIngMatch = false;
		let tagMatch = true;

		// Check if any ingredient name matches the search text
		for (let j = 0; j < ingredientNameCells.length; j++) {
			const ingredientName = ingredientNameCells[j].textContent.toLowerCase();
			if (ingredientName.includes(searchText)) {
				searchIngMatch = true;
				break;
			}
		}

		// Check if the recipe contains the selected tag(s)
		for (let j = 0; j < selectedIngredientTags.length; j++) {
			const tag = selectedIngredientTags[j].toLowerCase();
			let tagFound = false;

			for (let k = 0; k < ingredientNameCells.length; k++) {
				const ingredientName = ingredientNameCells[k].textContent.toLowerCase();
				if (ingredientName === tag) {
					tagFound = true;
					break;
				}
			}

			if (!tagFound) {
				tagMatch = false;
				break;
			}
		}

		// Show/hide the recipe card based on search & tag match
		if (searchIngMatch && tagMatch) {
			recipeCard.style.display = "block";
			cards++;
		} else {
			recipeCard.style.display = "none";
		}
	}

	// Update the total n° of recipes
	totalRecipeElement.textContent = cards + " recettes";
	displayFilteredRecipes();
}

// 2. Appliance section
applianceSearchInput.addEventListener("input", searchAppliances);

function searchAppliances() {
	const searchText = applianceSearchInput.value.toLowerCase();
	let cards = 0;

	for (let i = 0; i < recipeCards.length; i++) {
		const recipeCard = recipeCards[i];
		const applianceList = recipeCard.querySelectorAll(".applianceList");
		let searchAppMatch = false;
		let tagMatch = true;

		// Check if any appliance matches the search text
		for (let j = 0; j < applianceList.length; j++) {
			const applianceName = applianceList[j].textContent.toLowerCase();
			if (applianceName.includes(searchText)) {
				searchAppMatch = true;
				break;
			}
		}

		// Check if the recipe contains the selected tag(s)
		for (let j = 0; j < selectedApplianceTags.length; j++) {
			const tag = selectedApplianceTags[j].toLowerCase();
			let tagFound = false;

			for (let k = 0; k < applianceList.length; k++) {
				const applianceName = applianceList[k].textContent.toLowerCase();
				if (applianceName === tag) {
					tagFound = true;
					break;
				}
			}

			if (!tagFound) {
				tagMatch = false;
				break;
			}
		}

		// Show/hide the recipe card based on search match
		if (searchAppMatch && tagMatch) {
			recipeCard.style.display = "block";
			cards++;
		} else {
			recipeCard.style.display = "none";
		}
	}

	// Update the total n° of recipes
	totalRecipeElement.textContent = cards + " recettes";
	displayFilteredRecipes();
}

// 3. Utensil section
utensilSearchInput.addEventListener("input", searchUtensils);

function searchUtensils() {
	const searchText = utensilSearchInput.value.toLowerCase();
	let cards = 0;

	for (let i = 0; i < recipeCards.length; i++) {
		const recipeCard = recipeCards[i];
		const utensilList = recipeCard.querySelectorAll(".utensilList");
		let searchUteMatch = false;
		let tagMatch = true;

		// Check if any utensil matches the search text
		for (let j = 0; j < utensilList.length; j++) {
			const utensilName = utensilList[j].textContent.toLowerCase();
			if (utensilName.includes(searchText)) {
				searchUteMatch = true;
				break;
			}
		}

		// Check if the recipe contains the selected tag(s)
		for (let j = 0; j < selectedUtensilTags.length; j++) {
			const tag = selectedUtensilTags[j].toLowerCase();
			let tagFound = false;

			for (let k = 0; k < utensilList.length; k++) {
				const utensilName = utensilList[k].textContent.toLowerCase();
				if (utensilName === tag) {
					tagFound = true;
					break;
				}
			}

			if (!tagFound) {
				tagMatch = false;
				break;
			}
		}

		// Show/hide the recipe card based on search and tag matches
		if (searchUteMatch && tagMatch) {
			recipeCard.style.display = "block";
			cards++;
		} else {
			recipeCard.style.display = "none";
		}
	}

	// Update the total number of recipes
	totalRecipeElement.textContent = cards + " recettes";
	displayFilteredRecipes();
}
