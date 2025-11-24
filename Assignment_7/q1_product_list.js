// Q1 - Dynamic Product List Manager using event delegation

const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

// Helper: create a new <li> with product name + Edit/Delete buttons
function createProductItem(productName) {
  const liElement = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  liElement.appendChild(nameSpan);
  liElement.appendChild(editButton);
  liElement.appendChild(deleteButton);

  return liElement;
}

// Add new product
addProductBtn.addEventListener("click", () => {
  const trimmedValue = productInput.value.trim();
  if (!trimmedValue) return;

  const newItem = createProductItem(trimmedValue);
  productList.appendChild(newItem);
  productInput.value = "";
});

// Also add on Enter key
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addProductBtn.click();
  }
});

// Event delegation on <ul> for Edit/Delete
productList.addEventListener("click", (event) => {
  const targetElement = event.target;
  const parentItem = targetElement.closest("li");

  if (!parentItem) return;

  // Delete button
  if (targetElement.classList.contains("delete-btn")) {
    parentItem.remove();
  }

  // Edit button
  if (targetElement.classList.contains("edit-btn")) {
    enterEditMode(parentItem);
  }
});

// Enable inline editing
function enterEditMode(listItem) {
  const nameSpan = listItem.querySelector(".product-name");
  const currentName = nameSpan.textContent;

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = currentName;
  inputElement.className = "edit-input";

  // Replace span with input
  listItem.replaceChild(inputElement, nameSpan);
  inputElement.focus();

  // On blur (click outside) → auto-save
  inputElement.addEventListener("blur", () => {
    saveEdit(listItem, inputElement);
  });

  // If user presses Enter, also save
  inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      inputElement.blur(); // triggers blur → save
    }
  });
}

// Save edited value and restore span
function saveEdit(listItem, inputElement) {
  const newName = inputElement.value.trim() || "Unnamed Product";
  const newSpan = document.createElement("span");
  newSpan.className = "product-name";
  newSpan.textContent = newName;

  listItem.replaceChild(newSpan, inputElement);
}
