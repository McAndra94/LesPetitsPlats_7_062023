// 1. Ingredient filter functionality
const ingredientSearchInput = document.getElementById("ingredientSearchInput");
const ingredientItems = document.getElementById("ingredientDropdownItems");

ingredientSearchInput.addEventListener("input", filterIngredients);

function filterIngredients() {
  const inputText = ingredientSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterIngredients check`);

  const ingredientList =
    ingredientItems.getElementsByClassName("ingredientList");

  for (let i = 0; i < ingredientList.length; i++) {
    const item = ingredientList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// 2. Appliance filter functionality
const applianceSearchInput = document.getElementById("applianceSearchInput");
const applianceItems = document.getElementById("applianceDropdownItems");

applianceSearchInput.addEventListener("input", filterAppliances);

function filterAppliances() {
  const inputText = applianceSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterAppliances check`);

  const applianceList =
    applianceDropdown.getElementsByClassName("applianceList");

  for (let i = 0; i < applianceList.length; i++) {
    const item = applianceList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// 3. Utensil filter functionality
const utensilSearchInput = document.getElementById("utensilSearchInput");
const utensilItems = document.getElementById("utensilDropdownItems");

utensilSearchInput.addEventListener("input", filterUtensils);

function filterUtensils() {
  const inputText = utensilSearchInput.value.toLowerCase().trim();
  console.log(`${inputText.length} filterUtensils check`);

  const utensilList = utensilDropdown.getElementsByClassName("utensilList");

  for (let i = 0; i < utensilList.length; i++) {
    const item = utensilList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(inputText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
