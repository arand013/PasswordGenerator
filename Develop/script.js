// Get references to the #generate element and inserted Special Characters
const specialCharacters = "+=-_!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')

// Write password variable to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code 
function generatePassword() {


  // Variables with prompts here
  alert("Welcome, here is some options for your New Password!");
  var passwordLength = prompt("Type length of characters from 8 to 128 you want your password to be?");

  var upper = confirm("Uppercase Letters, ok or cancel?");
  var lower = confirm("Lowercase Letters, ok or cancel?");
  var numeric = confirm("Numbers, ok or cancel?");
  var special = confirm("Special Letters, ok or cancel?");

  // Console log info for valaidation
  console.log(passwordLength);
  console.log(upper);
  console.log(lower);
  console.log(numeric);
  console.log(special);


  // Varaiables for all options
  var capital = "";
  var Lowercase = "";
  var numbers = "";
  var specialChar = "";

  //Array with Math functions
  var stringFunction = {
    getcapital: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getLowercase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getnumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getspecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  };

  // If statements, are ensuring prompts are true/false

  // New Variables
  var thePassword = [];
  var finalPass = [];

  // this loop with if statements, push(s) the options to generate a random # together. 
  for (let i = 0; i < parseInt(passwordLength); i++) {
    if (upper === true) {
      capital = stringFunction.getcapital();
      thePassword.push(capital);
    } 
    if (lower === true) {
      Lowercase = stringFunction.getLowercase();
      thePassword.push(Lowercase);
    }
    if (numeric === true) {
      numbers = stringFunction.getnumbers();
      thePassword.push(numbers);
    }
    if (special === true) {
      specialChar = stringFunction.getspecialCharacters();
      thePassword.push(specialChar);
    }
  }

  // this loop push(s) that random # to only display the specifed length
  for (let i = 0; i < parseInt(passwordLength); i++) {
    finalPass.push(thePassword[(Math.floor(Math.random() * thePassword.length))])

  }
  // finalPass deletes extra (,'s) with the random #

  return finalPass.join("")
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
