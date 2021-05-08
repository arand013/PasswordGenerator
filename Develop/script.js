// Unicode 
var possibleChars = {
  upper: [],
  lower: [],
  sym: [],
  num: [],

}


function myFunction() {
  var password = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
  }
}



















// Write password to the #password input
function myFunction() {
  var password = alert("Welcome, here is some criteria for your New Password!");

}





// Assignment code here
var generatePassword = function () {
  passwordLength = prompt("What length from 8 to 128 characters would you like you password to be");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  if (passwordLength > 128 || passwordLength < 8) {
    generatePassword();
  }
  var passwordLowercase = confirm("Lowercase Letters, yes or cancel?");

  var passwordUppercase = confirm("Upperercase Letters, yes or cancel?");

  var passwordNumeric = confirm("Numeric Letters, yes or cancel?");

  var passwordSpecial = confirm("Special Letters, yes or cancel?");

  while (
    passwordLowercase === false &&
    passwordUppercase === false &&
    passwordNumeric === false &&
    passwordSpecial === false &&
  )
    generatePassword();

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
