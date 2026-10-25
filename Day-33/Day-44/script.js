function getFirstName() {
  let firstNameField = document.getElementById("firstName");
  console.log(firstNameField.value);
}

function getLastName() {
  let lastNameField = document.getElementById("lastName");
  console.log(lastNameField.value);
}

function getEmail() {
  let emailField = document.getElementById("email");
  console.log(emailField.value);
}

function getNumber() {
  let numberField = document.getElementById("number");
  console.log(numberField.value);
}

function getPassword() {
  let passwordField = document.getElementById("password");
  let confirmPasswordField = document.getElementById("ConfirmPassword");

  if (passwordField.value === confirmPasswordField.value) {
    console.log(passwordField.value);
  } else {
    console.log("Invalid Password");
  }
}
function getGender() {
  let maleField = document.getElementById("male");
  let femaleField = document.getElementById("female");

  if (maleField.checked) {
    console.log("Male");
  } else if (femaleField.checked) {
    console.log("Female");
  } else {
    console.log("Please select a gender");
  }
}
