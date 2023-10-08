// Function to save the last checked checkbox to local storage
function saveLastChecked(checkboxId) {
  localStorage.setItem("lastChecked", checkboxId);
}

// Function to retrieve the last checked checkbox from local storage
function getLastChecked() {
  return localStorage.getItem("lastChecked") || "001";
}

// Function to update checkboxes based on the last checked checkbox
function updateCheckboxes() {
  const lastCheckedId = getLastChecked();
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let foundLastChecked = false;

  checkboxes.forEach((checkbox) => {
    if (foundLastChecked) {
      checkbox.checked = false;
    } else if (checkbox.id === lastCheckedId) {
      foundLastChecked = true;
      checkbox.checked = true;
    } else {
      checkbox.checked = true;
    }
  });
}

// Add event listeners to the checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    saveLastChecked(event.target.id);
    updateCheckboxes();
  });
});

// Initialize the checkboxes based on the last checked checkbox in local storage
updateCheckboxes();
