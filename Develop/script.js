// Get references to the #generate element
const specialCharacters = "+=-_!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code 
function generatePassword() {


  // Variables with prompts here
  alert("Welcome, here is some criteria for your New Password!");
  var passwordLength = prompt("What length from 8 to 128 characters would you like your password to be");
  console.log(passwordLength);
  console.log(upper);
  console.log(lower);
  console.log(numeric);
  console.log(special);


  var upper = confirm("Uppercase Letters, yes or cancel?");
  var lower = confirm("Lowercase Letters, yes or cancel?");
  var numeric = confirm("Numbers, yes or cancel?");
  var special = confirm("Special Letters, yes or cancel?");


  // Varaiables for all options
  var minCount = 0;


  var capital = "";
  var Lowercase = "";
  var numbers = "";
  var specialChar = "";

  // May have to take away the lettersmall of em leave the ()
  //Array with Math functions
  var functionArray = {
    getcapital: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getLowercase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 55));
    },
    getnumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getspecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  };

  // If statements, are ensuring prompts are true/false

  if (upper === true) {
    capital = functionArray.getcapital();
    minCount++;
  }
  if (lower === true) {
    Lowercase = functionArray.getLowercase();
    minCount++;
  }
  if (numeric === true) {
    numbers = functionArray.getnumbers();
    minCount++;
  }
  if (special === true) {
    specialChar = functionArray.getspecialCharacters();
    minCount++;
  }

  // New Variable
  var thePassword = "";

  // this loop add(s) the randomness together. 
  for (let i = 0; i < (parseInt(passwordLength) - minCount); i++) {
    var randomPassword = Math.floor(Math.random() * 7);

    thePassword += randomPassword;
  }

  // Adding thePassword with all the options
  thePassword += capital;
  thePassword += Lowercase;
  thePassword += numbers;
  thePassword += specialChar;

  return thePassword;
}


