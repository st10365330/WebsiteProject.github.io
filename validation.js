var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

// Function to clear initial values on input focus
function clearInitialValue(inputElement) {
  if (inputElement.value === inputElement.defaultValue) {
    inputElement.value = "";
  }
}

// Function to check for required fields
function validateForm() {
  var nameValue = nameInput.value;
  if (nameValue === "" || nameValue === nameInput.defaultValue) {
    alert("Name is a required field. Please enter your name.");
    return false;
  }



  return true;
}

// Attach event listeners to form elements
nameInput.addEventListener("focus", function () {
  clearInitialValue(nameInput);
});

nameInput.addEventListener("blur", function () {
  if (nameInput.value === "") {
    nameInput.value = nameInput.defaultValue;
  }
});



// Attach a submit event listener to the form
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
