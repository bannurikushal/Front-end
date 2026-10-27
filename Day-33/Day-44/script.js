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

  let invalidpasswordField = document.getElementById("invalidpassword");
  if (password < 8 || password > 16) {
    console.log("invalid Password");
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

function getSubmit() {
  console.log("ingetsubmit");
  getFirstName();
  getLastName();
  getEmail();
  getNumber();
  getPassword();
  getGender();
}
