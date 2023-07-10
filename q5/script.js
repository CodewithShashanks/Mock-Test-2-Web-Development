var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var passwordInput = document.getElementById("password");
  var ageInput = document.getElementById("age");
  var genderInput = document.getElementById("gender");
  var dateInput = document.getElementById("date");
  var colorInput = document.getElementById("color");
  
  var valid = true;

  if (!validateName(nameInput.value)) {
    setError(nameInput, "Please enter a valid name.");
    valid = false;
  } else {
    clearError(nameInput);
  }

  if (!validateEmail(emailInput.value)) {
    setError(emailInput, "Please enter a valid email address.");
    valid = false;
  } else {
    clearError(emailInput);
  }

  if (!validatePhoneNumber(phoneInput.value)) {
    setError(phoneInput, "Please enter a valid phone number (10 digits).");
    valid = false;
  } else {
    clearError(phoneInput);
  }

  if (!validatePassword(passwordInput.value)) {
    setError(passwordInput, "Password must be at least 8 characters long.");
    valid = false;
  } else {
    clearError(passwordInput);
  }

  if (!validateAge(ageInput.value)) {
    setError(ageInput, "Please enter a valid age (between 18 and 99).");
    valid = false;
  } else {
    clearError(ageInput);
  }

  if (!validateGender(genderInput.value)) {
    setError(genderInput, "Please select a gender.");
    valid = false;
  } else {
    clearError(genderInput);
  }

  if (!validateDate(dateInput.value)) {
    setError(dateInput, "Please enter a valid date.");
    valid = false;
  } else {
    clearError(dateInput);
  }

  if (!validateColor(colorInput.value)) {
    setError(colorInput, "Please select a valid color.");
    valid = false;
  } else {
    clearError(colorInput);
  }

  if (valid) {
    // Form submission logic goes here
    console.log("Form submitted successfully!");
  }
});

function validateName(name) {
  var regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
}

function validateEmail(email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  return regex.test(email);
}

function validatePhoneNumber(phone) {
  var regex = /^\d{10}$/;
  return regex.test(phone);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateAge(age) {
  var minAge = 18;
  var maxAge = 99;
  return age >= minAge && age <= maxAge;
}

function validateGender(gender) {
  return gender !== "";
}

function validateDate(date) {
  var regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date);
}

function validateColor(color) {
  var regex = /^#[0-9A-Fa-f]{6}$/;
  return regex.test(color);
}

function setError(input, message) {
  var errorElement = document.createElement("span");
  errorElement.className = "error";
  errorElement.textContent = message;
  
  clearError(input);
  
  input.classList.add("error");
  input.parentNode.appendChild(errorElement);
}

function clearError(input) {
  input.classList.remove("error");
  
  var errorElement = input.parentNode.querySelector(".error");
  if (errorElement) {
    input.parentNode.removeChild(errorElement);
  }
}
