function addTag(tagName, tagsBox) {
  console.log("Tag check:", tagName);
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = tagName;

  tagsBox.appendChild(tag);
}

// Ingredient
const ingredientSearchInput = document.getElementById("ingredientSearchInput");
const ingredientDropdownItems = document.getElementById(
  "ingredientDropdownItems"
);
const ingredientTagsBox = document.getElementById("ingredientTagsBox");

ingredientDropdownItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("dropdown-item")) {
    const selectedItem = event.target.innerText;
    addTag(selectedItem, ingredientTagsBox);
    ingredientSearchInput.value = "";
  }
});

// Appliance
const applianceSearchInput = document.getElementById("applianceSearchInput");
const applianceDropdownItems = document.getElementById(
  "applianceDropdownItems"
);
const applianceTagsBox = document.getElementById("applianceTagsBox");

applianceDropdownItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("dropdown-item")) {
    const selectedItem = event.target.innerText;
    addTag(selectedItem, applianceTagsBox);
    applianceSearchInput.value = "";
  }
});

// Utensils
const utensilsSearchInput = document.getElementById("utensilsSearchInput");
const utensilsDropdownItems = document.getElementById("utensilsDropdownItems");
const utensilsTagsBox = document.getElementById("utensilsTagsBox");

utensilsDropdownItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("dropdown-item")) {
    const selectedItem = event.target.innerText;
    addTag(selectedItem, utensilsTagsBox);
    utensilsSearchInput.value = "";
  }
});

// To remove tags
ingredientTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});

applianceTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});

utensilsTagsBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});
