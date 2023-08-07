// Populate the 3 dropdown menus with data from recipes.js
function populateDropdowns(searchResults) {
	// Assign the HTML elements to variables that will contain the search + lists
	const ingredientDropdown = document.getElementById("ingredientDropdownItems");
	const applianceDropdown = document.getElementById("applianceDropdownItems");
	const utensilDropdown = document.getElementById("utensilDropdownItems");

	// Create empty arrays to contain the ingredients, appliances & utensils
	const ingredients = [];
	const appliances = [];
	const utensils = [];

	// If mainSearchDone is true, then searchResults, if not recipes
	let results = mainSearchDone ? searchResults : recipes;

	// Loop through all the recipeCards
	for (let i = 0; i < results.length; i++) {
		const recipe = results[i];

		// Getting ingredients, appliances, and utensils from the recipe
		const recipeIngredients = recipe.ingredients;
		const recipeAppliance = recipe.appliance;
		const recipeUtensils = recipe.ustensils;

		// Check then add if ingredient doesn't already exist in the ingredients array
		for (let j = 0; j < recipeIngredients.length; j++) {
			const ingredient = recipeIngredients[j].ingredient;
			if (!ingredients.includes(ingredient)) {
				ingredients.push(ingredient);
			}
		}

		// Check then add if appliance doesn't already exist (appliance doesn't contain an array)
		if (!appliances.includes(recipeAppliance)) {
			const appliance = recipeAppliance;
			appliances.push(appliance);
		}

		// Check then add if ustensil doesn't already exist in the ustensils array
		if (recipeUtensils) {
			for (let k = 0; k < recipeUtensils.length; k++) {
				const utensil = recipeUtensils[k];
				if (!utensils.includes(utensil)) {
					utensils.push(utensil);
				}
			}
		}
	}

	// After doing the above, call these 3 functions with 2 arguments (Arg)
	// Arg 1: targeted dropdown & Arg 2: items in each array
	// And populate the dropdowns with its' items
	populateIngredientDropdown(ingredientDropdown, ingredients);
	populateApplianceDropdown(applianceDropdown, appliances);
	populateUtensilDropdown(utensilDropdown, utensils);
}

// Arg 1: targeted dropdown container & Arg 2: options here refers to the available items
function populateIngredientDropdown(dropdown, options) {
	dropdown.innerHTML = ""; // empty 1st
	for (let i = 0; i < options.length; i++) {
		// Create <li> for each item available
		const li = document.createElement("li");
		li.classList.add("ingredientList");
		li.textContent = options[i];
		// If yes, hide the item in the dropdown list
		if (selectedIngredientTags.includes(options[i].toLowerCase().trim())) {
			li.style.display = "none";
		}
		dropdown.appendChild(li);
	}
}

function populateApplianceDropdown(dropdown, options) {
	dropdown.innerHTML = "";
	for (let i = 0; i < options.length; i++) {
		const li = document.createElement("li");
		li.classList.add("applianceList");
		li.textContent = options[i];
		if (selectedApplianceTags.includes(options[i].toLowerCase().trim())) {
			li.style.display = "none";
		}
		dropdown.appendChild(li);
	}
}

function populateUtensilDropdown(dropdown, options) {
	dropdown.innerHTML = "";
	for (let i = 0; i < options.length; i++) {
		const li = document.createElement("li");
		li.classList.add("utensilList");
		li.textContent = options[i];
		if (selectedUtensilTags.includes(options[i].toLowerCase().trim())) {
			li.style.display = "none";
		}
		dropdown.appendChild(li);
	}
}
