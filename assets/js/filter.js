// 1. Ingredient filter functionality
const ingredientSearchInput = document.getElementById("ingredientSearchInput");
const ingredientItems = document.getElementById("ingredientDropdownItems");

// Add event listener to input
ingredientSearchInput.addEventListener("input", function () {
	console.log("Ingredient input event");
	// Set the input text to lowercase & remove whitespaces before+after
	const inputText = ingredientSearchInput.value.toLowerCase().trim();
	// Search launches at 1st input & launches searchRecipes function
	if (inputText.length >= 0) {
		searchRecipes();
	}
	// Call filter function
	filterIngredients();
});

// Filter the ingredients with inputText
function filterIngredients() {
	const inputText = ingredientSearchInput.value.toLowerCase().trim();
	console.log(`${inputText.length} filterIngredients check`);

	const ingredientList =
		ingredientItems.getElementsByClassName("ingredientList");

	// Each ingredientList on the list becomes item
	for (let i = 0; i < ingredientList.length; i++) {
		const item = ingredientList[i];
		const itemName = item.textContent.toLowerCase();

		// If the itemName matches the inputText, show item; if not hide it
		if (itemName.includes(inputText)) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	}
}

// Add click event listener to ingredients on the dropdown list
ingredientDropdownItems.addEventListener("click", (event) => {
	// If the clicked item matches the ingredientList, turn to lowercase
	if (event.target.classList.contains("ingredientList")) {
		const ingredient = event.target.textContent.toLowerCase();
		// Add the ingredient as tag with the addIngredientTag function
		addIngredientTag(ingredient);
		// Display recipes based on mainSearchDone true/false
		displayFilteredRecipes();
	}
});

// 2. Appliance filter functionality
const applianceSearchInput = document.getElementById("applianceSearchInput");
const applianceItems = document.getElementById("applianceDropdownItems");

applianceSearchInput.addEventListener("input", function () {
	console.log("Appliance input event");
	const inputText = applianceSearchInput.value.toLowerCase().trim();
	if (inputText.length >= 0) {
		searchRecipes();
	}
	filterAppliances();
});

function filterAppliances() {
	const inputText = applianceSearchInput.value.toLowerCase().trim();
	console.log(`${inputText.length} filterAppliances check`);

	const applianceList = applianceItems.getElementsByClassName("applianceList");

	for (let i = 0; i < applianceList.length; i++) {
		const item = applianceList[i];
		const itemName = item.textContent.toLowerCase();

		if (itemName.includes(inputText)) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	}
	console.log("Appliance filter complete");
}

applianceDropdownItems.addEventListener("click", (event) => {
	if (event.target.classList.contains("applianceList")) {
		const appliance = event.target.textContent.toLowerCase();
		addApplianceTag(appliance);
		displayFilteredRecipes();
	}
});

// 3. Utensil filter functionality
const utensilSearchInput = document.getElementById("utensilSearchInput");
const utensilItems = document.getElementById("utensilDropdownItems");

utensilSearchInput.addEventListener("input", function () {
	console.log("Utensil input event");
	const inputText = utensilSearchInput.value.toLowerCase().trim();
	// Search launches at 1st input & launches searchRecipes function
	if (inputText.length >= 0) {
		searchRecipes();
	}
	filterUtensils();
});

function filterUtensils() {
	const inputText = utensilSearchInput.value.toLowerCase().trim();
	console.log(`${inputText.length} filterUtensils check`);

	const utensilList = utensilItems.getElementsByClassName("utensilList");

	for (let i = 0; i < utensilList.length; i++) {
		const item = utensilList[i];
		const itemName = item.textContent.toLowerCase();

		if (itemName.includes(inputText)) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	}
	console.log("Utensil filter complete");
}

utensilDropdownItems.addEventListener("click", (event) => {
	if (event.target.classList.contains("utensilList")) {
		const utensil = event.target.textContent.toLowerCase();
		addUtensilTag(utensil);
		displayFilteredRecipes();
	}
});

// Add eventListeners to the the dropdown items
function attachEventListeners() {
	// 1. Ingredient section
	const ingredientDropdown = document.getElementById("ingredientDropdownItems");
	const ingreDropdownItems =
		ingredientDropdown.getElementsByClassName("ingredientList");

	for (let i = 0; i < ingreDropdownItems.length; i++) {
		const item = ingreDropdownItems[i];
		// Click function on each item on the dropdown list
		item.addEventListener("click", function (event) {
			event.stopPropagation(); // Prevent normal behavior
			addIngredientTag(item.textContent.toLowerCase(), ingredientTagsBox);
			displayFilteredRecipes(selectedApplianceTags);
		});
	}

	// 2. Appliance section
	const applianceDropdown = document.getElementById("applianceDropdownItems");
	const appliDropdownItems =
		applianceDropdown.getElementsByClassName("applianceList");

	for (let i = 0; i < appliDropdownItems.length; i++) {
		const item = appliDropdownItems[i];
		item.addEventListener("click", function (event) {
			event.stopPropagation();
			addApplianceTag(item.textContent.toLowerCase(), applianceTagsBox);
			displayFilteredRecipes(selectedApplianceTags);
		});
	}

	// 3. Utensil section
	const utensilDropdown = document.getElementById("utensilDropdownItems");
	const utensilDropdownItems =
		utensilDropdown.getElementsByClassName("utensilList");

	for (let i = 0; i < utensilDropdownItems.length; i++) {
		const item = utensilDropdownItems[i];
		item.addEventListener("click", function (event) {
			event.stopPropagation();
			addUtensilTag(item.textContent.toLowerCase(), utensilTagsBox);
			displayFilteredRecipes(selectedApplianceTags);
		});
	}
}

// For displaying recipes that match the search & filters
function displayFilteredRecipes() {
	console.log("displayFilteredRecipes check");

	// If mainSearchDone is true, then searchResults, if not recipes
	let results = mainSearchDone ? searchResults : recipes;

	// Get tags from the 3 tag boxes
	const ingredientTags = ingredientTagsBox.getElementsByClassName("tag");
	const applianceTags = applianceTagsBox.getElementsByClassName("tag");
	const utensilTags = utensilTagsBox.getElementsByClassName("tag");

	// Create array storage for filtered results
	const filteredTagResults = [];

	for (let h = 0; h < results.length; h++) {
		console.log("Current recipe:", results[h]);
		const recipe = results[h];

		// Access data of the 3
		let ingredients = recipe.ingredients;
		let appliance = recipe.appliance;
		let utensils = recipe.ustensils;

		for (let i = 0; i < ingredients.length; i++) {
			let ingredient = ingredients[i];
			console.log(ingredient);
		}
		let hasMatchingTags = true;

		// Check if any of the ingredient tags match the recipe
		for (let j = 0; j < ingredientTags.length; j++) {
			const ingredientTag = ingredientTags[j];
			let ingredientMatch = false;

			const recipeIngredients = recipe.ingredients;
			for (let k = 0; k < recipeIngredients.length; k++) {
				const recipeIngredient = recipeIngredients[k].ingredient;
				if (
					recipeIngredient
						.toLowerCase()
						.includes(ingredientTag.textContent.toLowerCase())
				) {
					ingredientMatch = true;
					break;
				}
			}
			// If no ingredient match, set hasMatchingTags to false, then stop the loop
			if (!ingredientMatch) {
				hasMatchingTags = false;
				break;
			}
		}

		// Check if any of the appliance tags match the recipe
		if (hasMatchingTags && applianceTags.length > 0) {
			let applianceMatch = false;

			if (appliance) {
				applianceMatch = true; // Checks if recipe has an array named appliance
				for (let l = 0; l < applianceTags.length; l++) {
					const applianceTag = applianceTags[l];
					if (
						!appliance
							.toLowerCase()
							.includes(applianceTag.textContent.toLowerCase())
					) {
						applianceMatch = false; // If any tag doesn't match, set to false
						break;
					}
				}
			}

			if (!applianceMatch) {
				hasMatchingTags = false;
			}
		}

		// Check if any of the utensil tags match the recipe
		if (hasMatchingTags && utensilTags.length > 0) {
			let utensilMatch = false;

			if (utensils) {
				utensilMatch = true; // Checks if recipe has an array named ustensils
				for (let m = 0; m < utensilTags.length; m++) {
					const utensilTag = utensilTags[m];
					let hasTagMatch = false;
					for (let n = 0; n < utensils.length; n++) {
						const recipeUtensil = utensils[n].toLowerCase();
						if (recipeUtensil.includes(utensilTag.textContent.toLowerCase())) {
							hasTagMatch = true;
							break;
						}
					}
					// If no match, set utensilMatch to false
					if (!hasTagMatch) {
						utensilMatch = false;
						break;
					}
				}
			}

			if (!utensilMatch) {
				hasMatchingTags = false;
			}
		}
		// If match, add it to filtered recipes
		if (hasMatchingTags) {
			filteredTagResults.push(recipe);
		}
	}

	// Empty recipesSection before adding results
	recipesSection.innerHTML = "";

	// If result > 0, display it. If not, show noMatchMsg
	if (filteredTagResults.length > 0) {
		displayRecipes(filteredTagResults);
	} else {
		const searchedTags = []; // Storage
		for (let i = 0; i < ingredientTags.length; i++) {
			searchedTags.push(ingredientTags[i].textContent);
		}
		for (let i = 0; i < applianceTags.length; i++) {
			searchedTags.push(applianceTags[i].textContent);
		}
		for (let i = 0; i < utensilTags.length; i++) {
			searchedTags.push(utensilTags[i].textContent);
		}

		noMatchMsg.textContent = `Aucune recette ne contient ${searchedTags} vous pouvez chercher
    "tarte aux pommes", "poisson", etc.`;
		recipesSection.appendChild(noMatchMsg);
		// Update the total number of recipes to 0 when no match
		totalRecipeElement.textContent = "0 recette";
	}

	console.log(filteredTagResults);
	console.log(results);
	// Change the dropdown lists according to the remaining recipes
	populateDropdowns(filteredTagResults);
}
