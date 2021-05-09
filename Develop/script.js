// Get references to the #generate element
const specialChar = "+=-_!@#$%^&*()";
const generateButton = document.getElementById("generateBtn")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code 
function generatePassword() {


  // Variables with prompts here
  var password = alert("Welcome, here is some criteria for your New Password!");
  var passwordLength = prompt("What length from 8 to 128 characters would you like your password to be");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);


  var upper = confirm("Uppercase Letters, yes or cancel?");
  var lower = confirm("Lowercase Letters, yes or cancel?");
  var numeric = confirm("Numbers, yes or cancel?");
  var special = confirm("Special Letters, yes or cancel?");

  // Minimum count for all options
  var minCount = 0;


  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var Lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var numbers = "0123456789".split("");
  var specialChar = "+=-_!@#$%^&*".split("");

  // May have to take away the lettersmall of em leave the ()
  //Array with Math functions
  var functionArray = [
    function getcapital() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    function getLowercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    function getnumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    function getspecialChar() {
      return String.fromCharCode(Math.floor(Math.random() * specialChar.length));
    },
  ];

  // If statements, are ensuring prompts are true/false

  if (upper === true) {
    capital = functionArray[0];
    minCount++;
  }
  if (lower === true) {
    Lowercase = functionArray[1];
    minCount++;
  }
  if (numeric === true) {
    numbers = functionArray[2];
    minCount++;
  }
  if (special === true) {
    specialChar = functionArray[3];
    minCount++;
  }

  // New Variable
  







  var passwordString = "";


  // While loop inserted here

  while (passwordString.length < passwordLength) {

    if (upper) { passwordString += capital[Math.floor(Math.random() * capital.length)] }
    if (lower) { passwordString += Lowercase[Math.floor(Math.random() * Lowercase.length)] }
    if (numeric) { passwordString += numbers[Math.floor(Math.random() * numbers.length)] }
    if (special) { passwordString += specialChar[Math.floor(Math.random() * specialChar.length)] }

  }

  return passwordString;
}


